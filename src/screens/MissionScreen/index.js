import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MissionDetails from '../../components/MissionDetails'

class MissionScreen extends Component {
  render() {
    const { mission } = this.props
    return (
      <View style={{ flex: 1 }}>
        <MissionDetails mission={mission} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  mission: state.mission
})

MissionScreen.propTypes = {
  mission: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(MissionScreen)
