import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, AntDesign, Feather, MaterialCommunityIcons, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function BlackDelete() {
const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const GoMain = () => {
    navigation.navigate('Main');
  };
  function GoBlackReminders(){
    navigation.navigate('BlackReminders')
  }
  function GoBlackArchive(){
    navigation.navigate('BlackArchive')
  }
  function GoBlackLabels(){
    navigation.navigate('BlackLabels')
  }
  function GoBlackDelete(){
    navigation.navigate('BlackDelete')
  }
  function GoBlackHelp(){
    navigation.navigate('BlackHelp')
  }
  return (
    <>
      <SafeAreaView style={styles.Container}>
        <View style={styles.Main}>
          <View style={styles.FirstView}>
            <TouchableOpacity>
              <Ionicons name="reorder-three-outline" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.FirstViewHeader}>
              Trash
            </Text>
          </View>
          <View style={styles.CenterView}>
            <MaterialCommunityIcons name="delete" size={100} color="orange" />
            <Text style={styles.CenterViewText}>
              No notes in trash
            </Text>
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
                  <TouchableOpacity style={styles.iconStyle} onPress={GoBlackReminders} >
                    <Feather name="bell" size={24} color="black" />
                    <Text style={styles.modalText}>Reminders</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={GoBlackLabels} style={styles.iconStyle} >
                    <AntDesign name="plus" size={24} color="black" />
                    <Text style={styles.modalText}>Create new Label</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconStyle} onPress={GoBlackArchive} >
                    <Ionicons name="archive-sharp" size={24} color="black" />
                    <Text style={styles.modalText}>Archive</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconStyle} onPress={GoBlackDelete}>
                    <MaterialCommunityIcons name="delete" size={24} color="black" />
                    <Text style={styles.modalText}>Deleted</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconStyle}>
                    <SimpleLineIcons name="settings" size={24} color="black" />
                    <Text style={styles.modalText}>Settings</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconStyle} onPress={GoMain}>
                    <MaterialIcons name="invert-colors" size={24} color="black" />
                    <Text style={styles.modalText}>lite Mode</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconStyle} onPress={GoBlackHelp}>
                    <AntDesign name="questioncircleo" size={24} color="black" />
                    <Text style={styles.modalText}>Help & feedback</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
  },
  Main: {
    flex: 1,
    padding: 16,
  },
  FirstView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  FirstViewHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  CenterView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CenterViewText: {
    fontSize: 18,
    color: '#555',
    marginTop: 8,
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
  }
});
