import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

var JobListing = require('./JobListing');
var Login = require('./Login');

export default class MainNavigator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Login', index: 0 }}
        renderScene={(route, navigator) => {
            let title = route.title;
            if (title === 'Login') {
                return (
                  <Login
                    navigator = {navigator}/>
                )
            }
            if (title === 'JobListings') {
                return (
                    <JobListing
                      navigator = {navigator}/>
                )
            }
        }}
      />
    )
  }
}
