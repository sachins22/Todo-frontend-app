import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

export default function BlackSetting() {
  const navigation = useNavigation();
  const [isEnabledA, setIsEnabledA] = useState(false);
  const [isEnabledB, setIsEnabledB] = useState(false);
  const [isEnabledC, setIsEnabledC] = useState(false);
  const [isEnabledD, setIsEnabledD] = useState(false);
  const [time1, setTime1] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [time2, setTime2] = useState(new Date());
  const [show2, setShow2] = useState(false);
  const [time3, setTime3] = useState(new Date());
  const [show3, setShow3] = useState(false);

  const toggleSwitchA = () => setIsEnabledA(previousState => !previousState);
  const toggleSwitchB = () => setIsEnabledB(previousState => !previousState);
  const toggleSwitchC = () => setIsEnabledC(previousState => !previousState);
  const toggleSwitchD = () => setIsEnabledD(previousState => !previousState);

  const onChangeOne = (event, selectedDate) => {
    const currentDate = selectedDate || time1;
    setShow1(Platform.OS === 'ios');
    setTime1(currentDate);
    if (Platform.OS !== 'ios') {
      setShow1(false);
    }
  };

  const showTimepickerOne = () => {
    setShow1(true);
  };

  const onChangeTwo = (event, selectedDate) => {
    const currentDate = selectedDate || time2;
    setShow2(Platform.OS === 'ios');
    setTime2(currentDate);
    if (Platform.OS !== 'ios') {
      setShow2(false);
    }
  };

  const showTimepickerTwo = () => {
    setShow2(true);
  };

  const onChangeThree = (event, selectedDate) => {
    const currentDate = selectedDate || time3;
    setShow3(Platform.OS === 'ios');
    setTime3(currentDate);
    if (Platform.OS !== 'ios') {
      setShow3(false);
    }
  };

  const showTimepickerThree = () => {
    setShow3(true);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Main}>
        <View style={styles.HeaderView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Setting</Text>
        </View>
        <View style={styles.BodyFirst}>
          <Text style={styles.BodyFirstHeader}>Display options</Text>
          <View style={styles.BodyFirstOptions}>
            <Text style={styles.BodyFirstOptionsText}>Add new items to bottom</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabledA ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchA}
              value={isEnabledA}
            />
          </View>
          <View style={styles.BodyFirstOptions}>
            <Text style={styles.BodyFirstOptionsText}>Move checked items to bottom</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabledB ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchB}
              value={isEnabledB}
            />
          </View>
          <View style={styles.BodyFirstOptions}>
            <Text style={styles.BodyFirstOptionsText}>Display rich link previews</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabledC ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchC}
              value={isEnabledC}
            />
          </View>
        </View>
        <View style={styles.BodySecView}>
          <Text style={styles.BodySecViewHeader}>Reminder defaults</Text>
          <View style={styles.BodySecViewOptions}>
            <Text style={styles.BodySecViewOptionsText}>Morning</Text>
            <TouchableOpacity onPress={showTimepickerOne}>
              <Text style={styles.BodySecViewOptionsText}>{time1.toLocaleTimeString()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodySecViewOptions}>
            <Text style={styles.BodySecViewOptionsText}>Afternoon</Text>
            <TouchableOpacity onPress={showTimepickerTwo}>
              <Text style={styles.BodySecViewOptionsText}>{time2.toLocaleTimeString()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodySecViewOptions}>
            <Text style={styles.BodySecViewOptionsText}>Evening</Text>
            <TouchableOpacity onPress={showTimepickerThree}>
              <Text style={styles.BodySecViewOptionsText}>{time3.toLocaleTimeString()}</Text>
            </TouchableOpacity>
          </View>
          {show1 && (
            <DateTimePicker
              testID="dateTimePicker"
              value={time1}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onChangeOne}
            />
          )}
          {show2 && (
            <DateTimePicker
              testID="dateTimePicker"
              value={time2}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onChangeTwo}
            />
          )}
          {show3 && (
            <DateTimePicker
              testID="dateTimePicker"
              value={time3}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onChangeThree}
            />
          )}
        </View>
        <View style={styles.BodyThird}>
          <Text style={styles.BodyThirdHeader}>Sharing</Text>
          <View style={styles.BodyThirdOption}>
            <Text style={styles.BodyThirdOptionsText}>Enable Sharing</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabledD ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchD}
              value={isEnabledD}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
  },
  Main: {
    margin: 20,
  },
  HeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 22,
    marginLeft: 10,
    color: 'white',
  },
  BodyFirst: {
    marginTop: 20,
  },
  BodyFirstHeader: {
    fontSize: 26,
    marginBottom: 10,
    color: 'white',
  },
  BodyFirstOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  BodyFirstOptionsText: {
    fontSize: 16,
    color: 'white',
  },
  BodySecView: {
    marginTop: 20,
  },
  BodySecViewHeader: {
    fontSize: 26,
    marginBottom: 10,
    color: 'white',
  },
  BodySecViewOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  BodySecViewOptionsText: {
    fontSize: 16,
    color: 'white',
  },
  BodyThird: {
    marginTop: 20,
  },
  BodyThirdHeader: {
    fontSize: 26,
    marginBottom: 10,
    color: 'white',
  },
  BodyThirdOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  BodyThirdOptionsText: {
    fontSize: 16,
    color: 'white',
  },
});
