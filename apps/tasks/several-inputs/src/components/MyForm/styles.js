import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  formWrapper: {
    padding: 10,
    marginHorizontal: 15,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#0004',
    gap: 25
  },
  form: {
    label: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    inputText: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#0002',
      backgroundColor: '#0001',
      height: 45,
      paddingHorizontal: 8
    },
    inputPicker: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#0002',
      backgroundColor: '#0001'
    }
  },
  btn: {
    width: '70%',
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#4A9AF0',
    borderRadius: 5
  }
})