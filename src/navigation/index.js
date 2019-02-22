import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeScreen from '../screens/HomeScreen'
import LaunchScreen from '../screens/LaunchScreen'
import AboutScreen from '../screens/AboutScreen'
import MissionsScreen from '../screens/MissionsScreen'

const HomeScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home'
    }
  },
  Launch: { screen: LaunchScreen }
})

const AboutScreenStack = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About'
    }
  }
})

const MissionsScreenStack = createStackNavigator({
  Missions: {
    screen: MissionsScreen,
    navigationOptions: {
      title: 'Missions'
    }
  }
})

const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreenStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20} color={tintColor} />
      )
    }
  },
  Missions: {
    screen: MissionsScreenStack,
    navigationOptions: {
      tabBarLabel: 'Missions',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="tasks" size={30} color={tintColor} />
      )
    }
  },
  About: {
    screen: AboutScreenStack,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="info" size={30} color={tintColor} />
      )
    }
  }
})

export const AppContainer = createAppContainer(MainNavigator)
