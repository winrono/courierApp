import React, {Component} from 'react'
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import CourierApp from './CourierApp'
import courierAppReducer from './reducers/courierApp'

let initialState = {
  user: {
    isLoggedIn: false
  }
}

let store = createStore(courierAppReducer, initialState);

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <Provider store={store}>
        <CourierApp store={store}/>
      </Provider>
    )
  }
}