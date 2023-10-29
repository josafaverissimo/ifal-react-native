import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  },
  middle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  form: {
    alignItems: 'center'
  },
  inputWrapper: {
    width: '70%',
    marginBottom: 12
  }
})