import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MissionKey = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Launches</Text>
      <View style={styles.row}>
        <View style={[styles.rectangular, styles.greenSquare]}></View>
        <Text style={styles.type}> = Success</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.rectangular, styles.redSquare]}></View>
        <Text style={styles.type}> = Fail</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 100,
    marginBottom: 20
  },
  heading: {
    fontSize: 40,
    color: '#222',
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10
  },
  rectangular: {
    width: 50,
    height: 30,
  },
  greenSquare: {
    backgroundColor: '#008000'
  },
  redSquare: {
    backgroundColor: 'red'
  },
  type: {
    color: '#000',
    fontSize: 22
  }
})

export default MissionKey
