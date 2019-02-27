import React , { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { View, Text, StyleSheet } from 'react-native'

export default class Tab2 extends Component{
    constructor(props){
        super(props)
        Navigation.events().bindComponent(this);
        this.state = {
            text: 'nothing yet'
          };
    }

    componentWillMount = () =>{
        console.log('will mount of tab2')
      }
  
      componentDidMount = () =>{
        console.log('did mount of tab2')
      }
  
      componentDidAppear = () =>{
        console.log('Did Appear of tab2')
      }

      componentDidDisappear = () =>{
        console.log('did disappear of tab2')
      }

    render(){
        return(
            <View style={styles.root}>
                <Text>Tab2</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'red'
    }
  });