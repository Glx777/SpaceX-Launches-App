import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingBottom: 10
  },
  heading: {
    fontSize: 30,
    color: '#222',
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10
  },
  rectangular: {
    width: 50,
    height: 30
  },
  greenSquare: {
    backgroundColor: '#008000'
  },
  redSquare: {
    backgroundColor: 'red'
  },
  type: {
    color: '#000',
    fontSize: 22
  }
})
