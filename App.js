import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import React, {Component} from 'react';
import TabStack from './components/Navigators/TabStack'
import Modal from './components/Navigators/Modal'

export default class App extends Component {
  render() {
    return (
      <Switchnavi/>
    );
  }
}


const Switchnavi = createSwitchNavigator({
  Auth: Modal,
  MainScreen: TabStack

},{
initialRouteName: 'Auth'
})