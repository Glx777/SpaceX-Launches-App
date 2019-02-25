import React, { Component } from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'

import Mission from '../../components/Mission'
import Logo from '../../components/Logo'
import { addMissions } from '../../store/actions'

import { styles } from './styles'

class MissionsScreen extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    axios.get('https://api.spacexdata.com/v3/missions').then(res => {
      dispatch(addMissions(res.data))
      this.setState({ isLoading: false })
    })
  }
  render() {
    const { isLoading } = this.state
    const { missions, navigation } = this.props
    return (
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator style={styles.spinner} size="large" color="#222" />
        ) : (
          <View>
            <Logo />
            {missions.map((item, i) => (
              <Mission navigation={navigation} data={item} id={i} key={i} />
            ))}
          </View>
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  missions: state.missions
})

MissionsScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  missions: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(MissionsScreen)
