import React from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles'

const LaunchLogo = ({ links: { mission_patch } }) => {
  return (
    <View style={{ width: '100%', marginTop: 10 }}>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={{ uri: mission_patch }}
      />
    </View>
  )
}

LaunchLogo.propTypes = {
  links: PropTypes.object.isRequired
}

export default LaunchLogo
