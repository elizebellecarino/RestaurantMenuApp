import React,{ Component }  from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import DetailsScreen from "../screens/RestaurantsScreen/DetailsScreen"
import Icon from "react-native-vector-icons/Ionicons"
import TopNavigator from "../Navigators/TopNavigator"
export default TabStack = createStackNavigator({
    Foods: {screen:TopNavigator,
    
        navigationOptions:{
            headerTintColor:"white",
            title: "Restaurants Nearby",
          
            headerStyle:{
                backgroundColor:"#00BD57",
              
            },
            headerLeft:
            
                <Icon name="ios-menu" size={30} color="white" style={{marginLeft:10}}/>
                
               ,
            headerRight:
            
            <Icon name="ios-cart" size={30} color="white" style={{marginRight:10}}/>,
          
        }
        }
    ,
    Details: {screen: DetailsScreen,

        navigationOptions: ({navigation}) =>{ 
            return{ headerTintColor:"white",
        title: "Marmalade Burger Cafe",
        
        headerStyle:{
            backgroundColor:"#00BD57",
            
        },
        headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="md-arrow-back" size={30} color="white" style={{marginLeft:10}}/>
        </TouchableOpacity>,
        headerRight: <Icon name="ios-cart" size={30} color="white" style={{marginRight:10}}/>,
        }
           
        },
        
        }

},
    {
        
    }

);
