import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const LaunchDetails = ({ launch: { flight_number, launch_year, launch_success } }) =>  {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>Flight Number: {flight_number}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Launch Year: {launch_year}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Launch Success: {launch_success ? 'Yes': 'No'}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#424242',
    borderRadius: 2
  },
  text: {
    color: '#fff',
    fontSize: 22
  },
  successText: {
    color: 'green'
  }
})

export default LaunchDetails
