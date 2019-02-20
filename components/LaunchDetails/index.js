import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles'

const LaunchDetails = ({
  launch: { flight_number, launch_year, launch_success }
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Flight Number: {flight_number}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Launch Year: {launch_year}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>
          Launch Success:
          <Text
            style={launch_success ? styles.successText : styles.failureText}
          >
            {launch_success ? ' Yes' : ' No'}
          </Text>
        </Text>
      </View>
    </View>
  )
}

LaunchDetails.propTypes = {
  launch: PropTypes.object.isRequired
}

export default LaunchDetails
