import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Map extends Component {
    static navigationOptions = {
      drawerLabel: 'Hey'
    };
    render() {
      return <Text>Map goes here</Text>;
    }
  }