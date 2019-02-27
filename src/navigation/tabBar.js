import { Screens } from '../constant/screenId'
export const bottomTabs = {
  root:{
    bottomTabs:{
      id: 'BottomTabsId',
      options: {
        bottomTabs: {
            visible: true,
            currentTabIndex: 1,   // worked Properly when bottom tab is set as root.
            // titleDisplayMode: 'alwaysHide',    // hide the text from bottom tab 
        }
      },  
      children: [
        {
          component: {
              name: Screens.Tab1,
              options: {
                bottomTab: {
                  text: 'Tab 1',
                  icon: require('../Images/buzz.png'),
                  selectedIconColor: 'blue'
                },
                topBar:{
                    title:{
                        text:'Tab1'
                    }
                }
              }
            }
        },
        {
          component: {
            name: Screens.Tab2,
            options: {
              bottomTab: {
                text: 'Tab 2',
                icon: require('../Images/buzz.png'),
                selectedIconColor: 'blue',
              },
              topBar:{
                  title:{
                      text:'Tab2'
                  }
              }
            }
          }
        }
      ]
    }
}
}