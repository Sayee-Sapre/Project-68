import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class FacebookScreen extends React.Component{
render(){
    return(
        <View style={styles.fb}>

         <Text>Facebook</Text>

        </View>
        )
    }
}

const styles = StyleSheet.create({
fb:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})