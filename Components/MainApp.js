import React, { Component } from 'react'

import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import HomeView from './pages/HomeView';

const RootStack = createAppContainer(createBottomTabNavigator(
    {
      home: {
        screen: HomeView
      }
    }));

class MainApp extends React.Component {

  render() {

        return (
            <HomeView />
        )
    }
}



export default MainApp;

