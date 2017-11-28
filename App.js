import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import {Map, Login, Orders} from './components/export'

const CourierApp = DrawerNavigator({
  Orders: { screen: Orders },
  About: {screen: Map}
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    if (this.state.isLoggedIn){return <CourierApp />}
    else {
      return <Login onLoginPress={()=>{this.setState({isLoggedIn: true})}}/>
    };
    }
}