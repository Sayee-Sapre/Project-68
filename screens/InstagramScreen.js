import React from'react';
import{Text, View, StyleSheet} from 'react-native';
import { Component } from 'react';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style={styles.insta}>
                <Text>Instagram</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    insta:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})