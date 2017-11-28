import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Orders extends Component {
    static navigationOptions = {
      drawerLabel: 'Welcome'
    };
    render() {
    return (<Text>Here orders should be displayed!</Text>);
    }
  }