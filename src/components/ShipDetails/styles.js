import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    height: Dimensions.get('window').height * 0.5
  },
  image: {
    height: '100%',
    width: Dimensions.get('window').width
  },
  noImageText: {
    color: '#222',
    fontSize: 26,
    lineHeight: 30,
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 10
  },
  wrapper: {
    marginTop: 10,
    marginLeft: 10
  },
  text: {
    color: '#222',
    fontSize: 20,
    lineHeight: 30
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
