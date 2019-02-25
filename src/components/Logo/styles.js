import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  imageContainer: {
    height: 50,
    marginBottom: 10
  },
  image: {
    height: '100%',
    width: Dimensions.get('window').width
  }
})
