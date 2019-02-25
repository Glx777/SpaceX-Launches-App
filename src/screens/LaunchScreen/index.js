import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LaunchDetails from '../../components/LaunchDetails'
import RocketDetails from '../../components/RocketDetails'
import LaunchLogo from '../../components/LaunchLogo'

import { styles } from './styles'

class LaunchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  })

  render() {
    const {
      launch: { mission_name, rocket, links },
      launch
    } = this.props
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <LaunchLogo links={links} />
          <View style={styles.wrapper}>
            <Text style={styles.missionName}>Mission: {mission_name}</Text>
            <Text style={styles.smallHeading}>Launch Details</Text>
            <LaunchDetails launch={launch} />
            <Text style={styles.smallHeading}>Rocket Details</Text>
            <RocketDetails rocket={rocket} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  launch: state.launch
})

LaunchScreen.propTypes = {
  launch: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(LaunchScreen)
