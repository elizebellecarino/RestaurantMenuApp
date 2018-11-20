import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import MainMenu from "../screens/Main/RestaurantList"
export default HomeStackNavigator = createStackNavigator({
    Main: MainMenu
   
},{
    initialRouteName:'Main',
  
});
