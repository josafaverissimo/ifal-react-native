import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  form: {
    paddingVertical: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 21,
    marginBottom: 10
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    width: '70%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 8
  },
  loginButton: {
    padding: 10,
    backgroundColor: '#fa4',
    alignItems: 'center'
  },
  loginButtonText: {
    fontSize: 27
  },
  middle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})