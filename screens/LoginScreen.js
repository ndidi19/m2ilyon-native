import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = (props) => {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '843038629487-g6e96v25k5ft7ob0gifhl46ikv3dn2e4.apps.googleusercontent.com',
        iosClientId: '',
        androidClientId: '',
        webClientId: '843038629487-g6e96v25k5ft7ob0gifhl46ikv3dn2e4.apps.googleusercontent.com'
    });

    useEffect(() => {
        if (response?.type === 'success') {
            //console.log(response);
            const accessToken = response.authentication.accessToken;
            axios.get("https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + accessToken)
                .then(response => {
                    const { given_name, family_name, picture, email } = response.data;
                    try {
                        AsyncStorage.setItem('userInfos', JSON.stringify({
                            firstname: given_name,
                            lastname: family_name,
                            picture,
                            email
                        }))
                        .then(() => {
                            console.log("userInfos stored -> redirect to HomeScreen");
                            props.navigation.navigate("HomeScreen");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                    } catch(e) {
                        console.log('AsyncStorage setItem failure : ', e)
                    }
                    
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [response])

    // const navigateToHome = () => {
    //     // console.log(props);
    //     props.navigation.push("HomeScreen", {
    //         firstname: "John",
    //         lastname: 'Doe',
    //         age: 32
    //     })
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <Button title="Login with Google" disabled={!request} onPress={
                () => promptAsync()
            } />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container :{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    text: {
        color: '#fff',

    },
    button: {
        backgroundColor: 'white',
        color: 'black',
        marginTop: 10,
        padding: 5
    }
  })