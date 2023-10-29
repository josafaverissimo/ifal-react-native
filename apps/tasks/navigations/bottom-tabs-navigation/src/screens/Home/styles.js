import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  },
  form: {
    alignItems: 'center',
  },
  inputWrapper: {
    width: '70%'
  },
  label: {
    fontSize: 18,
    marginBottom: 4
  },
  input: {
    borderWidth: 2,
    borderColor: '#0007',
    borderRadius: 10,
    paddingHorizontal: 10
  },
  submitButton: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: '#88f',
    width: '70%',
    alignItems: 'center',
    borderRadius: 10
  },
  info: {
    alignItems: 'center'
  },
  details: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ddd',
    marginTop: 20
  },
  detail: {
    fontSize: 17,
    paddingBottom: 9
  }
})