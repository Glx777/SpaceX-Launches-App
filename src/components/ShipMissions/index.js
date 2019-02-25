import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles'

const ShipDetails = ({ mission: { name, flight } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Flight: {flight}</Text>
    </View>
  )
}

ShipDetails.propTypes = {
  mission: PropTypes.object.isRequired
}

export default ShipDetails
