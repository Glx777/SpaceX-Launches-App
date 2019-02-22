import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginTop: '4%',
    marginBottom: '4%'
  },
  heading: {
    fontSize: Dimensions.get('window').width * 0.08,
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
