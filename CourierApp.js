import React, {Component, ScrollView, SafeAreaView} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import AuthorizedApp from './AuthorizedApp'
import {Login} from './components/export'
import { connect } from 'react-redux'
import {setAuthorizationState} from './actions/user'

class CourierApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isLoggedIn) {
      return <AuthorizedApp/>
    } else {
      return <Login
        onLoginPress={() => {
        this.props.onLoginPress()
      }}/>
    };
  }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onLoginPress: () => {
        dispatch(setAuthorizationState(true));
      }
    }
  }


export default CourierAppConnected = connect(mapStateToProps, mapDispatchToProps)(CourierApp);