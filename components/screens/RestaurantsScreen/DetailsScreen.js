import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity, Image, } from 'react-native'
import OrderButton from "../../ButtonWithBackground/OrderButton"
import mainBurger from "../../assets/main_burger.jpg"
import ReviewNavigator from '../../Navigators/ReviewNavigator';
   class DetailsScreen extends Component{
    
     render(){
    return(
        
    <View style={styles.container}>
   

     <Text></Text>
     <View style={{width:300,height:200, alignSelf:"center"}} >
     <Image source={mainBurger} style={{width:"100%",height:"100%"}} />
     </View>
     <Text></Text>
     <OrderButton>Ready in 25 mins</OrderButton>
     <Text>  </Text>
     <View style={{width:"100%",flex:1}} >
     <ReviewNavigator/>
     </View>
    </View>
    )}
    }
    const styles= StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"white"
        }
    })
export default DetailsScreen;