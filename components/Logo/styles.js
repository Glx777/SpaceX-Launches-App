import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  imageContainer: {
    height: Dimensions.get('window').height * 0.12
  },
  image: {
    height: '100%',
    width: Dimensions.get('window').width
  }
})
