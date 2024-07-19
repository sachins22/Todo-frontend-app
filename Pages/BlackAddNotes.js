import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Color from '../colors/BlackColor';

const colors = Color

export default function BlackAddNotes() {
const navigation=useNavigation()
const [bgColor, setBgColor] = useState(colors[0]);
const [colorIndex, setColorIndex] = useState(0);

    function GoBack(){
        navigation.goBack()
    }
    function changeColor() {
      const nextIndex = (colorIndex + 1) % colors.length;
      setColorIndex(nextIndex);
      setBgColor(colors[nextIndex]);
  }

  return (
    <SafeAreaView style={[styles.Container, { backgroundColor: bgColor }]}>
      <View style={styles.FirstMain}>
        <TouchableOpacity style={styles.IconButton1} onPress={GoBack}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.FirstMainIcons}>
          <TouchableOpacity style={styles.IconButton2}>
            <Entypo name="pin" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.IconButton2}>
            <MaterialCommunityIcons name="bell-plus-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.IconButton2}>
            <Ionicons name="archive" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.InputBar}>
        <View style={styles.Input1}>
          <TextInput
            style={styles.TextInput}
            placeholder='Title'
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.Input2}>
          <TextInput
            style={styles.TextInput}
            placeholder='Note'
             placeholderTextColor="gray" 
            multiline
          
          />
        </View>
      </View>
      <View style={styles.BottomMain}>
      <View style={styles.BottomMainIcon}>
        <TouchableOpacity style={styles.IconButton}>
          <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.IconButton} onPress={changeColor}>
          <Ionicons name="color-palette-sharp" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.BottomMainIcon2}>
        <TouchableOpacity style={styles.IconButton}>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
  FirstMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  IconButton1: {
    padding: 8,
  },
  IconButton2: {
    padding: 8,
  },
  FirstMainIcons: {
    flexDirection: 'row',
  },
  InputBar: {
    flex: 1,
  },
  Input1: {
    marginBottom: 16,
  },
  Input2: {
    flex: 1,
    marginBottom: 16,
  },
  TextInput: {
    fontSize: 18,
    padding: 8,
  },
  BottomMain: {
    flexDirection: 'row',
        marginBottom: 16,
  },
  BottomMainIcon: {
    flexDirection: 'row',
    gap:15,  
  },
  BottomMainIcon2: {  
  left:200
  },
  IconButton: {
    padding: 8,
  },
});
