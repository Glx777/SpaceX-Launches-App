import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { chooseLaunch } from '../../store/actions/'

import { styles } from './styles'

class LaunchItem extends Component {
  changeScreen = id => {
    this.props.navigation.navigate('Launch', {
      title: `Launch №${id}`
    })
    this.props.dispatch(chooseLaunch(id))
  }

  render() {
    const {
      launch: { launch_date_local, mission_name, launch_success, flight_number }
    } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.missionName}>
          Mission:{' '}
          <Text
            style={launch_success ? styles.launchSuccess : styles.launchFailure}
          >
            {mission_name}
          </Text>
        </Text>
        <Text style={styles.date}>
          Date: {moment(launch_date_local).format('MMMM Do YYYY, h:mm:ss a')}
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => this.changeScreen(flight_number)}
        >
          <Text style={styles.buttonText}>Launch Details</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

LaunchItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  launch: PropTypes.object.isRequired
}

export default connect(null)(LaunchItem)
