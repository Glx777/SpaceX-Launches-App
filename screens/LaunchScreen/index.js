import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LaunchDetails from '../../components/LaunchDetails'
import RocketDetails from '../../components/RocketDetails'
import LaunchLogo from '../../components/LaunchLogo'

import { styles } from './styles'

class LaunchScreen extends Component {
  static navigationOptions = {
    title: 'Launch'
  }

  render() {
    const { launch } = this.props
    const { rocket, links } = launch
    return (
      <View style={styles.container}>
        <LaunchLogo links={links} />
        <View style={styles.wrapper}>
          <Text style={styles.missionName}>Mission: {launch.mission_name}</Text>
          <Text style={styles.smallHeading}>Launch Details</Text>
          <LaunchDetails launch={launch} />
          <Text style={styles.smallHeading}>Rocket Details</Text>
          <RocketDetails rocket={rocket} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  launch: state.launch
})

LaunchScreen.propTypes = {
  launch: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(LaunchScreen)
