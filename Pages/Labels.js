import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




export default function Labels() {
    const navigation = useNavigation() 
  const [isCreatingLabel, setIsCreatingLabel] = useState(false);
  const [labelText, setLabelText] = useState('');
  const [savedLabel, setSavedLabel] = useState('');
  const [isEditingLabel, setIsEditingLabel] = useState(false);

  function SaveLabel() {
    setSavedLabel(labelText);
    setLabelText('');
    setIsCreatingLabel(false);
    setIsEditingLabel(false);
  }

  function DeleteLabel() {
    setSavedLabel('');
  }

  function EditLabel() {
    setLabelText(savedLabel);
    setIsEditingLabel(true);
    setIsCreatingLabel(true);
  }

  function CreateLabel() {
    return (
      <View style={styles.ThirdMain}>
        <TouchableOpacity onPress={() => {
          setIsCreatingLabel(false);
          setIsEditingLabel(false);
        }}>
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          placeholder="Create new label"
          multiline
          style={styles.input}
          value={labelText}
          onChangeText={setLabelText}
        />
        <TouchableOpacity onPress={SaveLabel}>
          <AntDesign name="check" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Main}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.MainText}>
          <Text>Edit labels</Text>
        </View>
      </View>
      <View style={styles.SecMain}>
        <TouchableOpacity onPress={() => setIsCreatingLabel(true)}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
        {isCreatingLabel && <CreateLabel />}
        {savedLabel ? (
          <View style={styles.FourthMain}>
            <MaterialCommunityIcons name="label-outline" size={24} color="black" />
            <Text>{savedLabel}</Text>
            <TouchableOpacity onPress={EditLabel}>
              <MaterialCommunityIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={DeleteLabel}>
              <Entypo name="trash" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  Main: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  MainText: {
    flex: 1,
    alignItems: 'center',
  },
  SecMain: {
    paddingVertical: 16,
  },
  ThirdMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  FourthMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal: 8,
  },
});
