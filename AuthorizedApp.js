import React, {Component, ScrollView, SafeAreaView} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import {Map, Orders} from './components/export'
import { connect } from 'react-redux'
import {setAuthorizationState} from './actions/user'

class CustomDrawerComponent extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (<View>
        <DrawerItems {...this.props}/>
        <Button
          style={{
          alignSelf: 'stretch',
          textAlign: 'center'
        }}
          onPress={() => {
          this.props.onLogoutPress()
        }}
          title="Выйти"/>
      </View>)
    }
  }
  
  
  const mapStateToProps = state => {
      return {
          isLoggedIn: state.user.isLoggedIn
      }
  }
  
  const mapDispatchToProps = dispatch => {
      return {
        onLogoutPress: () => {
          dispatch(setAuthorizationState(false));
        }
      }
    }
  
  
  const CustomDrawerComponentConnected = connect(mapStateToProps, mapDispatchToProps)(CustomDrawerComponent);
  
  
  const navigatorConfig = {
    contentComponent: CustomDrawerComponentConnected
  };
  
  export default AuthorizedApp = DrawerNavigator({
    Orders: {
      screen: Orders
    },
    About: {
      screen: Map
    }
  }, navigatorConfig);