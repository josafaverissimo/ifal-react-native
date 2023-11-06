import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3157EB',
    gap: 70
  },
  formWrapper: {
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    color: '#fff',
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#31CCEB',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    color: '#fff',
  },
  inputWrapper: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center'
  },
  searchButton: {
    justifyContent: 'center',
  },
  searchButtonIcon: {
    backgroundColor: '#31CCEB',
    borderRadius: 100,
    padding: 5,
    fontSize: 26,
    color: '#fff'
  },
  cityTyped: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  contentWrapper: {
    paddingHorizontal: 16,
    justifyContent: 'center'
  },
  image: {
    height: 100,
    width: 200
  },
  temp: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32
  }
})