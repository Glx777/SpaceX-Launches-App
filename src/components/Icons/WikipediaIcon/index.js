import React from 'react'
import { TouchableOpacity, Image, Linking } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from '../styles'

const WikipediaIcon = ({ link }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => Linking.openURL(link)}
    >
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../../assets/images/wikipedia-icon.png')}
      />
    </TouchableOpacity>
  )
}

WikipediaIcon.propTypes = {
  link: PropTypes.string.isRequired
}

export default WikipediaIcon
