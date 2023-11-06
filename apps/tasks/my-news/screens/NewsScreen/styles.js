import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#494D52',
    gap: 20
  },
  content: {
    container: {
      flex: 1,
      gap: 10
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#eee',
      paddingHorizontal: 15
    },
    description: {
      fontSize: 18,
      color: '#eee',
      paddingHorizontal: 15
    },
    author: {
      color: '#eee',
      fontStyle: 'italic'
    },
    publishedAt: {
      color: '#eee',
      fontWeight: 'bold'
    }
  },
  image: {
    height: 400
  }
})