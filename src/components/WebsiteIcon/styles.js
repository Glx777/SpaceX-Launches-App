import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.25
  },
  image: {
    height: '100%',
    width: '100%'
  }
})
