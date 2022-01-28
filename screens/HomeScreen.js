import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = (props) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <Image style={{width: 150, height: 150, borderRadius: 75, marginBottom: 20}}
            source={{uri: props.route.params.picture}} />
            <Text style={styles.text}>Welcome {props.route.params.firstname} {props.route.params.lastname} !</Text>
            <Text style={styles.text}>You're connected with email : {props.route.params.email}</Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container :{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    text: {
        color: '#fff'
      }
  })