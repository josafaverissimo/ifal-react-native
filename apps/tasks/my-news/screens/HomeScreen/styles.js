import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#494D52',
    gap: 20
  },
  search: {
    container: {
      alignItems: 'center',
      gap: 15
    },
    title: {
      fontSize: 18,
      color: '#eee',
      fontWeight: 'bold'
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15
    },
    button: {
      fontSize: 32,
      color: '#eee',
      backgroundColor: '#4AA1EB',
      padding: 5,
      borderRadius: 32
    }
  },
  content: {
    container: {
      flex: 1,
      gap: 3
    },
    header: {
      color: '#eee',
      fontSize: 17
    },
    termSearched: {
      fontStyle: 'italic',
      fontWeight: 'bold'
    }
  },
  news: {
    container: {
      marginTop: 10
    },
    image: {
      height: 300
    },
    author: {
      fontSize: 16,
      color: '#eee',
      fontStyle: 'italic'
    },
    title: {
      fontSize: 19,
      color: '#eee',
      fontWeight: 'bold'
    },
    textWrapper: {
      paddingHorizontal: 15
    },
    actions: {
      container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        gap: 10
      },
      icon: {
        fontSize: 25,
        color: '#5E8EB8'
      }
    }
  },
  input: {
    fontSize: 17,
    borderWidth: 2,
    borderColor: '#4AA1EB',
    borderRadius: 10,
    padding: 10,
    width: '70%',
    maxWidth: '70%',
    color: '#eee'
  }
})