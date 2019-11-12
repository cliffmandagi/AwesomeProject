import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // npm install --save react-navigation@3.13.0 // expo install react-native-gesture-handler

import ComponentScreen from './screens/ComponentScreen';
import FriendScreen from './screens/FriendScreen';
import StudentScreen from './screens/StudentScreen';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import CounterScreen from './screens/CounterScreen';

const navigator = createStackNavigator({
    Component: ComponentScreen,
    Friend: FriendScreen,
    Home: HomeScreen,
    Image: ImageScreen,
    Counter: CounterScreen
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
    headerTitle: 'App Mobile Programming',
    headerStyle: {
      backgroundColor: 'white'
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Navigasi, Button, Flatlist
// git clone https://github.com/stenlyadam/mobile-programming.git