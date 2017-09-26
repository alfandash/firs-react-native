/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import WelcomePage from './src-android/WelcomePage'
import MainScreen from './src-android/MainScreen'
import NewsCard from './src-android/NewsCard'

const AwesomeProject = StackNavigator({
  Welcome: { screen: WelcomePage, navigationOptions: { header: null }},
  MainScreen: { screen: MainScreen, navigationOptions: { header: null }},
  // NewsCard: { screen: NewsCard, navigationOptions: { header: null } }
})

export default AwesomeProject


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
