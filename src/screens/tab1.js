import React , { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { View, Text, StyleSheet } from 'react-native'

export default class Tab1 extends Component{
    constructor(props){
        super(props)
        Navigation.events().bindComponent(this);
        this.state = {
            text: 'nothing yet'
          };
    }

    componentDidAppear = () =>{
        console.log('Did Appear of tab1')
    }

    componentDidDisappear = () =>{
        console.log('did disappear of tab1')
    }

    render(){
        return(
            <View style={styles.root}>
                <Text>Tab1</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'blue'
    }
  });