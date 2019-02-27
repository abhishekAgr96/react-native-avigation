import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { bottomTabs } from '../navigation/tabBar'
import { Navigation } from 'react-native-navigation';
import { Screens } from '../constant/screenId'
export default class Screen3 extends Component {
    constructor(props) {
      super(props);
      Navigation.events().bindComponent(this);
      this.state = {
        text: 'nothing yet'
      };
    }

    componentDidAppear = () =>{
        console.log('Did Appear of screen3')
      }

    render() {
      return (  
        <View style={styles.root}>
          <Text >This is Overlay screen3</Text>
          <Text onPress={()=>{Navigation.dismissOverlay(this.props.componentId);}}>X</Text>
        </View>      
          
      );
    }
  }
  const styles = StyleSheet.create({
    root:{
        backgroundColor:'red',
        color:'white',
        marginTop: 100,
        flexDirection: 'row',
        justifyContent:'space-around'
    }
  });
  