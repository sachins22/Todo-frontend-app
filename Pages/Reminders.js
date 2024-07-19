import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




export default function Reminders() {

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
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
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.main}>
          <TouchableOpacity style={styles.iconButton} onPress={toggleModalVisibility}>
            <Ionicons name="reorder-three-outline" size={32} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Reminders</Text>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.centerMain}>
          <FontAwesome5 name="bell" size={120} color="orange" />
          <Text style={styles.centerText}>Notes with upcoming reminders appear here</Text>
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
          <TouchableOpacity style={styles.iconButton}>
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
                <TouchableOpacity style={styles.iconStyle}>
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
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  centerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
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
    // left:100,
    right:50,
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
    // alignItems: 'center',
    margin:10,
    marginBottom: 10,
  },
});
