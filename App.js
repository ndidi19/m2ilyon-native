import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";


// const Stack = createStackNavigator();
// console.log('Stack => :', Stack);

const {Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Navigator>
            <Screen name="LandingScreen" component={LandingScreen} />
            <Screen name="LoginScreen" component={LoginScreen} />
            <Screen name="HomeScreen" component={HomeScreen} />
        </Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderColor: 'yellow',
    borderWidth: 5
  }
})