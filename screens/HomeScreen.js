import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

import { addLaunches } from '../store/actions/'
import MissionKey from '../components/MissionKey'
import LaunchItem from '../components/LaunchItem'
import Logo from '../components/Logo'

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
    axios.get('https://api.spacexdata.com/v3/launches')
      .then(res => {
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
        { isLoading ? 
        <ActivityIndicator size='large' color='#222' />
        :
        <ScrollView style={{width: '100%'}}>
          {
            launches.map(launch => (
              <LaunchItem navigation={this.props.navigation} launch={launch} key={launch.flight_number} />
            ))
          }
        </ScrollView>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  button: {
    marginTop: '30%',
    width: widthPercentageToDP('90%'),
    backgroundColor: '#696969',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 22
  }
})

const mapStateToProps = state => ({
  launches: state.launches
})

export default connect(mapStateToProps)(HomeScreen)