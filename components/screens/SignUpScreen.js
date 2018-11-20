import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import HomeButton1 from "../ButtonWithBackground/HomeButton1"
import FacebookButton from '../ButtonWithBackground/FacebookButton';
import TwitterButton from '../ButtonWithBackground/TwitterButton';
import CustomInput from "../CustomInput/CustomInput"
import Icon from 'react-native-vector-icons/Ionicons';
   class SignUpScreen extends Component{
     render(){
    return(
    <View style={styles.container}>
      <View style={{alignItems:"center", marginTop:20}}>
       
     
       <View style={{flexDirection:"row", width:"100%",alignItems:"center"}}>
       <TouchableOpacity onPress={ () => this.props.navigation.goBack() } >
         <Icon name="md-arrow-back" color="black" size={30} style={{marginLeft:"30%"}}/>
         </TouchableOpacity>
         <Text style={{fontWeight:"bold",fontSize:15, marginLeft:"1%"}}>REGISTER NOW</Text>
         </View>
         </View>
    <View style={{alignItems:"center"}}>
        <CustomInput  placeholder={"USERNAME"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        <CustomInput placeholder={"EMAIL ADDRESS"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        <CustomInput placeholder={"PASSWORD"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        <CustomInput placeholder={"CONFIRM PASSWORD"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        </View>
        <View style={{justifyContent:"center"}}>
        <View>
       <HomeButton1 onPress={() => this.props.navigation.navigate('Login')}>SIGN UP</HomeButton1>
       <View style={{alignItems:"center"}}>
       <Text>  </Text>
       <Text>OR</Text>
       <Text>  </Text>
       </View>
       <FacebookButton>CONNECT WITH FACEBOOK</FacebookButton>
       <TwitterButton>CONNECT WITH TWITTER</TwitterButton>
       </View>
       </View>
    </View>
    )
    }
    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"white"
    
           
        }
    })
export default SignUpScreen;