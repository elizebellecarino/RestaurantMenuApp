import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen"
import LoginScreen from "../screens/LoginScreen"
import SignUpScreen from "../screens/SignUpScreen"
import TopNavigator from "../Navigators/TopNavigator"

export default HomeStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Content : TopNavigator
  
},
    {
      initialRouteName:'Home',
      navigationOptions :{
        header:null
    }
    }

)