import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Logo from '../components/Logo'
import LaunchDetails from '../components/LaunchDetails'
import RocketDetails from '../components/RocketDetails'

class LaunchScreen extends Component {
  static navigationOptions = {
    title: 'Launch'
  }

  render() {
    const { launch } = this.props
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.wrapper}>
          <Text style={styles.missionName}>Mission: {launch.mission_name}</Text>
          <Text style={styles.smallHeading}>Launch Details</Text>
          <LaunchDetails launch={launch} />
          <Text style={styles.smallHeading}>Rocket Details</Text>
          <RocketDetails launch={launch} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  wrapper: {
    marginTop: 30,
    width: '94%'
  },
  missionName: {
    color: '#222',
    fontSize: 26
  },
  smallHeading: {
    color: '#222',
    fontSize: 18
  }
})

const mapStateToProps = state => ({
  launch: state.launch
})

export default connect(mapStateToProps)(LaunchScreen)
