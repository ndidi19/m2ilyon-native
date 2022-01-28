import { StatusBar } from "expo-status-bar";
import { useEffect} from 'react';
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import * as Font from 'expo-font';

// const Stack = createStackNavigator();
// console.log('Stack => :', Stack);

const {Navigator, Screen} = createStackNavigator();

export default function App() {

  useEffect(() => {
    loadRessources()
  }, []);

  const loadRessources = async () => {
    try {
      await Font.loadAsync({
        "Supermercado": require("./assets/fonts/SupermercadoOne-Regular.ttf"),
        "Supermercado": require("./assets/fonts/SupermercadoOne-Regular.ttf"),
        "Supermercado": require("./assets/fonts/SupermercadoOne-Regular.ttf"),
      })
    } catch(e) {
      console.log('Unable to load fonts : ', e)
    }
  }

  return (
    <NavigationContainer>
        <Navigator screenOptions={options => {
              console.log("LandingScreen Options : ", options);
              return {
                headerStyle: {
                  backgroundColor: 'red'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 25
                }
              }
            }}>
            <Screen name="LandingScreen" component={LandingScreen} options={options =>{
              return {
                title: "My App",
              }
            } }/>
            <Screen name="LoginScreen" component={LoginScreen} options={options =>{
              return {
                title: "Login",
                headerLeft: false
              }
            } } />
            <Screen name="HomeScreen" component={HomeScreen} options={options =>{
              return {
                title: "Home",
              }
            } }/>
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