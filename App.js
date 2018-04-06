import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import marvelApp from './app/reducers'
import { StackNavigator } from 'react-navigation';
import HomeContainer from "./app/containers/Home";
import SearchPageContainer from "./app/containers/SearchContainer"
let store = createStore(marvelApp, applyMiddleware(thunk))

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    SearchPage:{
      screen: SearchPageContainer
    }
  },
  {
    initialRouteName: 'SearchPage',
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
