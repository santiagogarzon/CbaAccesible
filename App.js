import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import Home from './components/Home.js';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  HomePage: {
    screen: Home
  },  
}, { headerMode: 'none'});

export default class App extends React.Component {
  
  render() {
    return <RootStack />;
  }
}




