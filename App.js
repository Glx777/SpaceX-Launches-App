import React, { Component } from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import LaunchScreen from './screens/LaunchScreen'
import { reducers } from './store/reducers'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Launch: { screen: LaunchScreen }
})
const AppContainer = createAppContainer(MainNavigator)

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}

export default App
