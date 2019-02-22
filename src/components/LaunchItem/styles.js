import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '96%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#222',
    alignSelf: 'center'
  },
  missionName: {
    fontSize: 22,
    marginLeft: 10,
    marginTop: 10
  },
  launchSuccess: {
    color: '#008000'
  },
  launchFailure: {
    color: 'red'
  },
  date: {
    marginLeft: 10,
    marginTop: 6,
    fontSize: 16
  },
  button: {
    borderColor: '#222',
    borderRadius: 4,
    borderWidth: 1,
    marginLeft: 10,
    width: 150,
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    color: '#222',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 6,
    paddingBottom: 6
  }
})
