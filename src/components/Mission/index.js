import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { chooseMission } from '../../store/actions'

import { styles } from './styles'

class Mission extends Component {
  changeScreen = id => {
    const { navigation, dispatch } = this.props
    navigation.navigate('Mission')
    dispatch(chooseMission(id))
  }

  render() {
    const {
      data: { mission_name, mission_id },
      id
    } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.missionName}>Mission: {mission_name}</Text>
        <Text style={styles.id}>Mission ID: {mission_id}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => this.changeScreen(id)}
        >
          <Text style={styles.buttonText}>Mission Details</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Mission.propTypes = {
  data: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
}

export default connect()(Mission)
