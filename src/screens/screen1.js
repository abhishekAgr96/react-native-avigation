import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation';
export default class Screen1 extends Component {
    constructor(props) {
      super(props);
      Navigation.events().bindComponent(this);
    }

    componentDidDisappear = () =>{
      console.log('did disappear of screen1')
    }

    componentWillUnmount = () =>{
      console.log('will unmount of screen1')
    }
  
    NavigationFunction = ()=>{
        Navigation.push(this.props.componentId,{
           component: {
            name: 'Screen2',
            passProps: {
              title: 'this text is passing in props'
            },
            options: {
              topBar: {
                visible: false,
                title: {
                  text: 'Screen 2'
                },
                // leftButtons: [
                //   {
                //     id: 'buttonOne',
                //     icon: require('../Images/buzz.png')
                //   }
                // ],
              }
            }
          }
        })
    }

    showOverlay = () =>{
      Navigation.showOverlay({
        component: {
          name: 'Screen3',
          options: {
            overlay: {
              interceptTouchOutside: false
            }
          }
        }
      });
    }

    hideNavigationButtons = () =>{
      Navigation.mergeOptions(this.props.componentId, {
        topBar: {
          rightButtons: [
            {
              id:'Screen1TopText',
              text: 'Save'
            }
          ]
        }
      });
    }

    enableNavigationButtons = () => {
      Navigation.mergeOptions(this.props.componentId, {
        topBar: {
          rightButtons: [{
            id:'Screen1TopText',
            text: 'Save',
            enabled: false,
            color: 'green',
            disabledColor: 'red',
          },
          {
            id:'Screen1TopButton',
            icon: require('../Images/buzz.png'),
            disableIconTint: false,
            enabled: true
          }]
        }
      });
    }

    // predefined function 
    navigationButtonPressed=({ buttonId })=> {
      if(buttonId=='Screen1TopText')
      alert('Saving....')
      if(buttonId=='Screen1TopButton')
      alert('button pressed')
    }

   
    render() {
      return (
        <View style={styles.root}>
          <Text onPress={()=>this.hideNavigationButtons()}>Hide top button Options</Text>
          <Text onPress={()=>this.enableNavigationButtons()}>press here to enable naviagtion buttons</Text>
          <TouchableOpacity 
            onPress={()=>{this.NavigationFunction()}}
          >
            <Text>Press To Navigate on screen 2</Text>
          </TouchableOpacity>
          <Text onPress={()=>this.showOverlay()}>Show Overlay</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
  });
  