import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LandingScreen = (props) => {

    const navigateToLogin = () => {
        // console.log(props);
        props.navigation.push("LoginScreen")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Landing Screen</Text>
            <TouchableOpacity onPress={navigateToLogin}>
                <View style={styles.button}>
                    <Text>Go To Login Page</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default LandingScreen;

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