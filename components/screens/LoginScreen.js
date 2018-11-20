import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity, Image} from 'react-native'
import HomeButton1 from '../ButtonWithBackground/HomeButton1'
import FacebookButton from '../ButtonWithBackground/FacebookButton'
import TwitterButton from '../ButtonWithBackground/TwitterButton';
import CustomInput from '../CustomInput/CustomInput';
import Icon from "react-native-vector-icons/Ionicons"
import login from "../assets/login.jpg"
   class LoginScreen extends Component{
     render(){
    return(
    <View style={styles.container}>
     <View style={{alignItems:"center", marginTop:20}}>
       
      
      <View style={{flexDirection:"row", width:"100%", alignItems:"center"}}>
      <TouchableOpacity onPress={ () => this.props.navigation.goBack() } >
        <Icon name="md-arrow-back" color="black" size={30} style={{marginLeft:"30%",marginBottom:"10%"}}/>
        </TouchableOpacity>
        <Text style={{fontWeight:"bold",fontSize:15,marginLeft:"7%", marginBottom:"5%"}}>SIGN IN</Text>
        </View>
        </View>
      <Text> </Text>
      <Text> </Text>
        <View style={{flex:1,justifyContent:"center"}}>
        <View style={{alignItems:"center"}}>
        <CustomInput placeholder={"EMAIL ADDRESS"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        <CustomInput placeholder={"PASSWORD"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        </View>
        <HomeButton1 onPress={() =>  this.props.navigation.navigate('MainScreen')}>LOG IN</HomeButton1>
        <Text> </Text>
        <View style={{alignItems:"center"}}>
        <View style={{flexDirection:"row"}}>
        <Text>Forgot Password? </Text>
        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('ForgotPass')}>
        <Text style={{color:"#9ACD32"}}>Click here</Text></TouchableOpacity>
        </View>
        <Text> </Text>
        <Text>OR</Text>
        <Text> </Text>
        </View>
        <FacebookButton>CONNECT WITH FACEBOOK</FacebookButton>
        <TwitterButton>CONNECT WITH TWITTER</TwitterButton>
        <View style={{width:370, height:210}}>
        <Image source={login} style={{ width:"100%", height:"100%"}} />
        </View>
        </View>
        </View>
    )
    }
    }
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"#FFFFFF",
            justifyContent:"center"
        }
    })
export default LoginScreen;