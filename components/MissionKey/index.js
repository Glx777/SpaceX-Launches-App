import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

const MissionKey = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Launches</Text>
      <View style={styles.row}>
        <View style={[styles.rectangular, styles.greenSquare]} />
        <Text style={styles.type}> = Success</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.rectangular, styles.redSquare]} />
        <Text style={styles.type}> = Fail</Text>
      </View>
    </View>
  )
}

export default MissionKey
