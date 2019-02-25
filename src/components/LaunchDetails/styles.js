import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 4
  },
  text: {
    color: '#222',
    fontSize: 22,
    lineHeight: 30,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
  row: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  successText: {
    color: 'green'
  },
  failureText: {
    color: 'red'
  }
})
