import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { chooseShip } from '../../store/actions'

import { styles } from './styles'

const Ship = ({ navigation, dispatch, id, ship: { ship_id, ship_name } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.missionName}>Ship Name: {ship_name}</Text>
      <Text style={styles.id}>Ship ID: {ship_id}</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={() => {
          dispatch(chooseShip(id))
          navigation.navigate('Ship')
        }}
      >
        <Text style={styles.buttonText}>Ship Details</Text>
      </TouchableOpacity>
    </View>
  )
}

Ship.propTypes = {
  ship: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(Ship)
