import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Main from "./App/Main";
import Agree from "./Log/Agree";
import BlackMain from "./App/BlackMain";
import AddNotes from "./Pages/AddNotes";
import BlackAddNotes from "./Pages/BlackAddNotes";
import Reminders from "./Pages/Reminders";
import BlackReminders from "./Pages/BlackReminders";
import Archive from "./Pages/Archive";
import BlackArchive from "./Pages/BlackArchive";
import Labels from "./Pages/Labels";
import BlackLabels from "./Pages/BlackLabels";
import Delete from "./Pages/Delete";
import BlackDelete from "./Pages/BlackDelete";
import Help from "./Pages/Help";
import BlackHelp from "./Pages/BlackHelp";
import Setting from "./Pages/Setting";
import BlackSetting from "./Pages/BlackSetting";


const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Agree">
        <Stack.Screen
        name="Agree" component={Agree} options={{headerShown:false}}
        />
        <Stack.Screen
        name="Main" component={Main} options={{headerShown:false}}
        />
        <Stack.Screen
        name="BlackMain" component={BlackMain} options={{headerShown:false}}
        />
        <Stack.Screen
        name="AddNotes" component={AddNotes} options={{headerShown:false}}
        />
        <Stack.Screen
        name="BlackAddNotes" component={BlackAddNotes} options={{headerShown:false}}
        />
        <Stack.Screen
        name="Reminders" component={Reminders} options={{headerShown:false}}
        />
        <Stack.Screen
        name="BlackReminders" component={BlackReminders} options={{headerShown:false}}
        />
        <Stack.Screen
        name="Archive" component={Archive} options={{headerShown:false}}
        />
        <Stack.Screen
        name="BlackArchive" component={BlackArchive} options={{headerShown:false}}
        />
        <Stack.Screen
        name="Labels" component={Labels} options={{headerShown:false}}
        />
        <Stack.Screen
        name="BlackLabels" component={BlackLabels} options={{headerShown:false}}
        />
        <Stack.Screen
        name="Delete" component={Delete} options={{headerShown:false}}
        />
        <Stack.Screen
        name="BlackDelete" component={BlackDelete} options={{headerShown:false}}
        />
        <Stack.Screen
        name="Help" component={Help} options={{headerShown:false}}
        />
        <Stack.Screen
        name="BlackHelp" component={BlackHelp} options={{headerShown:false}}
        />
        <Stack.Screen
        name="Setting" component={Setting} options={{headerShown:false}}
        />
        <Stack.Screen
        name="BlackSetting" component={BlackSetting} options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}