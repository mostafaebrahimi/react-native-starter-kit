/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import store from "./src/redux";
import RootNavigator from "./src/navigation/Navigation";
import NavigationService from "./src/navigation/NavigationService";
import { Provider } from "react-redux";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
