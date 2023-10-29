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
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#aaa'
  },
  detail: {
    fontSize: 20
  }
})