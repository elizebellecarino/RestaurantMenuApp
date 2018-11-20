import React, { Component } from 'react'
import {View,Text,StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import hamburger from "../assets/hamburger.png"
import CustomInput from '../CustomInput/CustomInput';
import HomeButton1 from '../ButtonWithBackground/HomeButton1';
   class ForgotPassword extends Component{
     render(){
    return(
    <View style={styles.container}>
        <Text>  </Text>
       
    <View style={{alignItems:"center"}}>
    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Icon name="md-close" size={26} color="black" />
        </TouchableOpacity>
        <View style={{width:200,height:200}}>
            <Image source={hamburger} style={{width:"100%",height:"100%"}}/>
        </View>
        <Text style={{fontWeight:"bold",fontSize:18}}>FORGOT YOUR PASSWORD?</Text>
        <Text>  </Text>
        <Text>Enter your email below to receive</Text>
        <Text>the instruction to reset your</Text>
        <Text>password</Text>
        <View style={{width:"90%", alignItems:"center"}}>
            <CustomInput placeholder={"EMAIL ADDRESS"} />
        </View>
        <View style={{width:"90%"}}>
            <HomeButton1>SEND PASSWORD</HomeButton1>
        </View>
        </View>
    
    </View>
    )
    }
    }
    const styles= StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"white"
}
    })
export default ForgotPassword;