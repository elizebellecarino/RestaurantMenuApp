import React, { Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import HomeButton1 from '../ButtonWithBackground/HomeButton1'
import HomeButton2 from '../ButtonWithBackground/HomeButton2';
import logo from "../assets/company_logo.png"
import home from "../assets/home.jpg"
   class HomeScreen extends Component{
     render(){
     return(
     
    <View style={styles.container}>
    <View style={{width:400, height:300}}>
        <Image source={home} style={{alignSelf:"flex-start",width:"90%",height:"100%"}} />
        </View>
        <View style={{alignSelf:"center",width:250, height:120}}>
        <Image source={logo} style={{alignSelf:"center",width:"100%",height:"100%"}} />
        </View>
        <Text>  </Text>
        <Text>  </Text>
        <HomeButton1 onPress={() =>  this.props.navigation.navigate('SignUp')}>SIGN UP</HomeButton1>
        <HomeButton2 onPress={() =>  this.props.navigation.navigate('Login')}>LOG IN</HomeButton2>
    </View>
    )}
    }

        const styles= StyleSheet.create({
        container:{
            flex:1,
        }
    })
export default HomeScreen;