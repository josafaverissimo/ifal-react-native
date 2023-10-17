import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 10,
    marginHorizontal: 5,
    gap: 20
  },
  text: {
    fontSize: 17
  },
  userName: {
    fontSize: 21,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textTransform: 'capitalize'
  },
  list: {
    item: {
      fontSize: 18
    },
    value: {
      fontStyle: 'italic',
      fontWeight: 'bold'
    }
  }
})