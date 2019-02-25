import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5
  }
})
