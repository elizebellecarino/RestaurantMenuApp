import {createMaterialTopTabNavigator} from 'react-navigation'
import PlaceReview from "../screens/RestaurantsScreen/PlaceReview";
import PlaceInfo from "../screens/RestaurantsScreen/PlaceInfo"
import FoodMenu from "../screens/RestaurantsScreen/FoodMenu"
export default ReviewNavigator = createMaterialTopTabNavigator({
    FoodMenu : {
        screen:FoodMenu,
    navigationOptions: {
        tabBarLabel: 'Food Menu',
      
    }
    },
    Info : {
        screen:PlaceInfo,
    navigationOptions: {
        tabBarLabel: 'Place Details',
        
      
    }
    },
    Reviews : {
        screen:PlaceReview,
    navigationOptions: {
        tabBarLabel: 'Place Reviews',
      
    }
    }
},
{
    initialRouteName:"Reviews",
    tabBarOptions:{
        style: {
            backgroundColor:'white',
            // height:"10%",
            // borderTopColor:"gray",
            // borderTopWidth:.5
          borderBottomColor:"black",
          borderBottomWidth:.5,
                elevation:0
            
        },
        labelStyle:{
            fontSize:11,
            fontWeight:"bold"
        },
        // showIcon: true,
        activeTintColor: "green",
        inactiveTintColor: "black",
    //   tabStyle:{
    //       backgroundColor:"white"
    //   },
      indicatorStyle:{
          backgroundColor:"white"
      }
    
    }
}

)