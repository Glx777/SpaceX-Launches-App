import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

const Logo = () => {
  return (
    <View style={{flex: 1}}>
       <Image
          style={styles.image}
          source={require('../../assets/images/SpaceX-Logo.svg.png')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: widthPercentageToDP('100%'),
    marginTop: 20
  }
})

export default Logo
