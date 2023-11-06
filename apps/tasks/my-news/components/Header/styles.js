import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  header: {
    container: {
      paddingHorizontal: 16,
      paddingVertical: 5,
      backgroundColor: '#232C33',
      flexDirection: 'row'
    },
    title: {
      fontSize: 21,
      fontWeight: 'bold',
      color: '#eee'
    },
    subtitle: {
      fontSize: 17,
      fontStyle: 'italic',
      color: '#ccc'
    },
    popIcon: {
      wrapper: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
      },
      icon: {
        fontSize: 32,
        color: '#eee'
      }
    }
  },
})