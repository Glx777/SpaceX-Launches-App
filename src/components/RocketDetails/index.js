import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles'

const RocketDetails = ({ rocket: { rocket_id, rocket_name, rocket_type } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rocket ID: {rocket_id}</Text>
      <Text style={styles.text}>Rocket Name: {rocket_name}</Text>
      <Text style={styles.text}>Rocket Type: {rocket_type}</Text>
    </View>
  )
}

RocketDetails.propTypes = {
  rocket: PropTypes.object.isRequired
}

export default RocketDetails
