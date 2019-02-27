import Screen1 from './screen1'
import Screen2 from './screen2'
import Screen3 from './screen3'
import Tab1 from './tab1'
import Tab2 from './tab2'
import { Screens } from '../constant/screenId' 
let ScreenMap :Map< string, any> = new Map()

ScreenMap.set( Screens.Screen1, () => Screen1)
ScreenMap.set( Screens.Screen2, () => Screen2)
ScreenMap.set( Screens.Screen3, () => Screen3)
ScreenMap.set( Screens.Tab1, () => Tab1)
ScreenMap.set( Screens.Tab2, () => Tab2)

export default ScreenMap;