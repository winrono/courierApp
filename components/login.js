import React, {Component} from 'react';
import {Button} from 'react-native';

export default class Login extends Component{
    render(){
      return <Button title="Login" onPress={()=>{this.props.onLoginPress()}}/>;    
    }
  }