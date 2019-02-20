import React, { Component } from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'

import { addLaunches } from '../../store/actions'
import MissionKey from '../../components/MissionKey'
import LaunchItem from '../../components/LaunchItem'
import Logo from '../../components/Logo'

import { styles } from './styles'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches').then(res => {
      this.props.dispatch(addLaunches(res.data))
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { launches } = this.props
    const { isLoading } = this.state
    return (
      <View style={styles.container}>
        <Logo />
        <MissionKey />
        {isLoading ? (
          <ActivityIndicator size="large" color="#222" />
        ) : (
          <ScrollView style={{ width: '100%' }}>
            {launches.map(launch => (
              <LaunchItem
                navigation={this.props.navigation}
                launch={launch}
                key={launch.flight_number}
              />
            ))}
          </ScrollView>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  launches: state.launches
})

HomeScreen.propTypes = {
  launches: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(HomeScreen)
