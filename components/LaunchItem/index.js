import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { connect } from 'react-redux'

import { chooseLaunch } from '../../store/actions/'

const LaunchItem = ({ dispatch, navigation, launch: { mission_name, launch_date_local, launch_success, flight_number } }) => {
  const date = moment(launch_date_local).format('MMMM Do YYYY, h:mm:ss a')
  
  changeScreen = id => {
    navigation.navigate('Launch')
    dispatch(chooseLaunch(id))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.missionName}>Mission: <Text style={launch_success ? styles.launchSuccess : styles.launchFailure}>{mission_name}</Text></Text>
      <Text style={styles.date}>Date: {date}</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={() => this.changeScreen(flight_number)}>
        <Text style={styles.buttonText}>Launch Details</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '96%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#222',
    alignSelf: 'center'
  },
  missionName: {
    fontSize: 22,
    marginLeft: 10,
    marginTop: 10
  },
  launchSuccess: {
    color: '#008000'
  },
  launchFailure: {
    color: 'red'
  },
  date: {
    marginLeft: 10,
    marginTop: 6,
    fontSize: 16
  },
  button: {
    borderColor: '#222',
    borderRadius: 4,
    borderWidth: 1,
    marginLeft: 10,
    width: 150,
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    color: '#222',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 6,
    paddingBottom: 6
  }
})

export default connect(null)(LaunchItem)