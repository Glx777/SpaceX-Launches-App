import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spinner: {
    marginTop: Dimensions.get('window').height * 0.3
  },
  wrapper: {
    marginLeft: Dimensions.get('window').width * 0.02
  },
  row: {
    marginTop: Dimensions.get('window').height * 0.02,
    paddingBottom: Dimensions.get('window').height * 0.02,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    marginTop: Dimensions.get('window').height * 0.01,
    fontSize: Dimensions.get('window').height * 0.03,
    lineHeight: Dimensions.get('window').height * 0.04
  }
})
