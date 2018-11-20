import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import MainMenu from '../screens/Main/RestaurantList'
import Map from '../screens/Main/RestaurantMap'

export default TopNavigator = createMaterialTopTabNavigator({
    MainMenu : {
        screen:MainMenu,
    navigationOptions: {
        tabBarLabel: 'Restaurants List',
       
    }
    },
    Map : {
        screen:Map,
    navigationOptions: {
        tabBarLabel: 'Restaurants Map',

    }
    }

  },{
   swipeEnabled:false,
    initialRouteName:'MainMenu',
    tabBarOptions:{
        style: {
            backgroundColor:'white',
            elevation:0
            
        },
        labelStyle:{
            fontSize:13,
            fontWeight:"bold"
        },
        activeTintColor: "green",
        inactiveTintColor: "black",

         indicatorStyle:{
           backgroundColor:"white"
      }
    }

  });
 