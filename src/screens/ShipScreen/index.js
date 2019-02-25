import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ShipDetails from '../../components/ShipDetails'

const ShipScreen = ({ ship }) => {
  return (
    <View style={{ flex: 1 }}>
      <ShipDetails ship={ship} />
    </View>
  )
}

const mapStateToProps = state => ({
  ship: state.ship
})

ShipScreen.propTypes = {
  ship: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(ShipScreen)
