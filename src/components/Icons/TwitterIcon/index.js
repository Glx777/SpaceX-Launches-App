import React from 'react'
import { TouchableOpacity, Image, Linking } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from '../styles'

const TwitterIcon = ({ link }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => Linking.openURL(link)}
    >
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../../assets/images/twitter-icon.png')}
      />
    </TouchableOpacity>
  )
}

TwitterIcon.propTypes = {
  link: PropTypes.string.isRequired
}

export default TwitterIcon
