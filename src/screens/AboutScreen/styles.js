import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spinner: {
    marginTop: Dimensions.get('window').height * 0.4
  },
  wrapper: {
    marginLeft: 10
  },
  row: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 20,
    lineHeight: 30
  }
})
