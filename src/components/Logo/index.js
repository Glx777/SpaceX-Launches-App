import React from 'react'
import { View, Image } from 'react-native'

import { styles } from './styles'

const Logo = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        alt="Logo"
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/images/SpaceX-Logo.svg.png')}
      />
    </View>
  )
}

export default Logo
