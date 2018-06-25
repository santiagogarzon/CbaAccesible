import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import Home from './components/Home.js';
import { createStackNavigator } from 'react-navigation';
import Organizations from './components/Organizations.js';
import Events from './components/Events.js';

const RootStack = createStackNavigator({
  HomePage: {
    screen: Home
  },
  OrganizationsPage: {
    screen: Organizations
  },
  EventsPage: {
    screen: Events
  }  
}, { headerMode: 'none'});

export default class App extends React.Component {
  
  render() {
    return <RootStack />;
  }
}




