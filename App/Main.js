import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker";

export default function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [CPstatus, requestCPPermission] = ImagePicker.useCameraPermissions();
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const navigation = useNavigation();

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };
  const toggleModalVisibility1 = () => {
    setModalVisible1(!modalVisible1);
  };

  const GoBlackMain = () => {
    navigation.navigate('BlackMain');
  };
  const GoReminders = () => {
    navigation.navigate('Reminders');
  };
  const GoArchive = () => {
    navigation.navigate('Archive');
  };
  const GoLabels = () => {
    navigation.navigate('Labels');
  };
  const GoDelete = () => {
    navigation.navigate('Delete');
  };
  const GoHelp = () => {
    navigation.navigate('Help');
  };
  const GoSetting = () => {
    navigation.navigate('Setting');
  };


  const cameraAttach = async () => {
    if (CPstatus.status !== "granted") {
      const permission = await requestCPPermission();
      if (!permission.granted) return;
    }

    let capImg = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [25, 25],
      quality: 1,
    });

    setImages(capImg.assets)
   
  };

  const imgPicker = async () => {
    if (status.status !== "granted") {
      const permission = await requestPermission();
      if (!permission.granted) return;
    }

    const IMP = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [25, 25],
      quality: 1,
    });

    setImages(IMP.assets)
 
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.main}>
          <TouchableOpacity style={styles.iconButton} onPress={toggleModalVisibility}>
            <Ionicons name="reorder-three-outline" size={32} color="black" />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Search your notes"
            returnKeyType="search"
          />
        </View>
        <View style={styles.bottomMain}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="check-square" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="paint-brush" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="mic" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={toggleModalVisibility1}>
            <Feather name="image" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.floatingButtonContainer}>
          <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('AddNotes')}>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModalVisibility}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.textContainer}>
                <Text style={styles.modalHeading1}>Keep<Text style={styles.modalHeading2}> Notes</Text></Text>
                <TouchableOpacity style={styles.iconStyle}>
                  <AntDesign name="bulb1" size={24} color="black" />
                  <Text style={styles.modalText}>Notes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={GoReminders}>
                  <Feather name="bell" size={24} color="black" />
                  <Text style={styles.modalText}>Reminders</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={GoLabels} style={styles.iconStyle}>
                  <AntDesign name="plus" size={24} color="black" />
                  <Text style={styles.modalText}>Create new Label</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={GoArchive}>
                  <Ionicons name="archive-sharp" size={24} color="black" />
                  <Text style={styles.modalText}>Archive</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={GoDelete}>
                  <MaterialCommunityIcons name="delete" size={24} color="black" />
                  <Text style={styles.modalText}>Deleted</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={GoSetting}>
                  <SimpleLineIcons name="settings" size={24} color="black" />
                  <Text style={styles.modalText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={GoBlackMain}>
                  <MaterialIcons name="invert-colors" size={24} color="black" />
                  <Text style={styles.modalText}>Dark Mode</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={GoHelp}>
                  <AntDesign name="questioncircleo" size={24} color="black" />
                  <Text style={styles.modalText}>Help & feedback</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={toggleModalVisibility1}
        >
          <View style={styles.centeredView1}>
            <View style={styles.modalView1}>
              <TouchableOpacity style={styles.Modal1Camera} onPress={cameraAttach}>
                <AntDesign name="camera" size={24} color="black" />
                <Text style={styles.Modal1Text}>Take Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Modal1Photo} onPress={imgPicker}>
                <Entypo name="images" size={24} color="black" />
                <Text style={styles.Modal1Text}>Choose image</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  main: {
    width: "100%",
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  iconButton: {
    padding: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: '100%',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  bottomMain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "#ffffff",
    height: 60,
    alignItems: 'center',
    marginHorizontal: 5,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'absolute',
    bottom: 1,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 80,
    right: 28,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  modalView: {
    margin: 20,
    width: "85%",
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    right: 50,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer: {
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 10,
  },
  modalHeading1: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: "blue",
  },
  modalHeading2: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: "black",
  },
  iconStyle: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 10,
  },
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView1: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Modal1Camera:{
    flexDirection:"row",
    marginVertical:20,

  },
  Modal1Photo:{
    flexDirection:"row",
    marginVertical:20,

  },
  Modal1Text:{
    marginHorizontal:15
  }
});
