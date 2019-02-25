import React from 'react'
import { TouchableOpacity, Image, Linking } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from '../styles'

const WebsiteIcon = ({ link }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => Linking.openURL(link)}
    >
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../../assets/images/website-icon.png')}
      />
    </TouchableOpacity>
  )
}

WebsiteIcon.propTypes = {
  link: PropTypes.string.isRequired
}

export default WebsiteIcon
