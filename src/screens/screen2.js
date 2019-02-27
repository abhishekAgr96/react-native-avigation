import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { bottomTabs } from '../navigation/tabBar'
import { Navigation } from 'react-native-navigation';
import { Screens } from '../constant/screenId'
export default class Screen2 extends Component {
    constructor(props) {
      super(props);
      Navigation.events().bindComponent(this);
      this.state = {
        text: 'nothing yet'
      };
    }

    componentWillMount = () =>{
      console.log('will mount of screen2')
    }

    componentDidMount = () =>{
      console.log('did mount of screen2')
    }

    componentDidAppear = () =>{
      console.log('Did Appear of screen2')
    }

    
    
    navigateFunction = () =>{
      // this commented code not working.
      // Navigation.mergeOptions("BottomTabsId", {
      //   bottomTabs: {
      //     currentTabIndex: 1,
      //   }
      // });
      // Navigation.push(this.props.componentId, bottomTabs )
      Navigation.setRoot(bottomTabs);
    }

    showTopBar = () =>{
      Navigation.mergeOptions(this.props.componentId, {
        topBar: {
          visible:true
        }
      })
    }
  
    render() {
      return (
        <View style={styles.root}>
          <Text onPress={()=>{this.showTopBar()}}>Press here to show top Navigation bar</Text>
          <Text>{this.props.title}</Text>
          <Text onPress={()=>{
            this.navigateFunction()
          }}>Press to navigate on Tab-Bar</Text>
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
  