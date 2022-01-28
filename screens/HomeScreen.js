import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const HomeScreen = (props) => {
    
    const [user, setUser] = useState({});

    useEffect(() => {
        useAsyncStorage('userInfos').getItem()
            .then(userInfos => {
                console.log("userInfos from storage : ",userInfos);
                setUser(JSON.parse(userInfos));
            })
    }, [])
    return (
        <View style={styles.container}>
            <Image style={{width: 150, height: 150, borderRadius: 75, marginBottom: 20}}
            source={{uri: user.picture}} />
            <Text style={styles.text}>Welcome {user.firstname} {user.lastname} !</Text>
            <Text style={styles.text}>You're connected with email : {user.email}</Text>
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
        color: '#fff',
        fontFamily: "Supermercado",
        fontSize: 20,
        textAlign: 'center'
      }
  })