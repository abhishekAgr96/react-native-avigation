/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { Navigation } from 'react-native-navigation';
import App from './App';
import  ScreenMap  from './src/screens/screenMap'
import { Screens } from './src/constant/screenId'
// import { StackNavigation } from './src/navigation/drawer'
import { bottomTabs } from './src/navigation/tabBar'


const ScreenArray = Array.from( ScreenMap.entries())

const StackNavigation = {
  root: {
    stack:{
      children: [{
          component : {
              id: Screens.Screen1,
              name: 'Screen1',
              options:{
                topBar: {
                  title: {
                    text: 'Screen 1'
                  },
                  rightButtons: [{
                    id:'Screen1TopText',
                    text: 'Save',
                    enabled: true,
                    color: 'green',
                    disabledColor: 'red',
                  },
                  {
                    id:'Screen1TopButton',
                    icon: require('./src/Images/buzz.png'),
                    disableIconTint: false,
                    enabled: false
                  }]
                }
                
              }
          }
      }]
    }
  }
}



registerComponent=()=>{
    ScreenArray.forEach( ([screenId,screenCallback]) => {
        Navigation.registerComponent(screenId,screenCallback)
    })
}

registerComponent();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(StackNavigation);
});