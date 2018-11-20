import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import OrderButton from "../ButtonWithBackground/OrderButton";
   class Caption extends Component{
     render(){
    return(
   
         <View> 
         <View style={{paddingLeft:"5%"}}>
         <View style={{flexDirection:"row", width:"100%", alignItems:"center"}}>
         <View style={{flexDirection:"column", marginRight:10}}>
         <Text style={{fontWeight:"bold",fontSize:17}}>La Fabrica De Las Ampas</Text>
         <Text>Mexican Food</Text>
         </View>

         <OrderButton width={{width:"95%"}} size={{fontSize:13}} >Ready in 25Min</OrderButton>
         </View>
         </View>
         <Text></Text>
        
         </View>
        
    )
    }
    }
export default Caption;