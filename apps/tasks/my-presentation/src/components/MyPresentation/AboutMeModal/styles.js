import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 16,
    paddingHorizontal: 10
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#527FD9',
    borderRadius: 5
  },
  closeButtonText: {
    textAlign: 'center',
    fontSize: 25
  },
  myImageWrapper: {
    alignItems: 'center'
  },
  myImage: {
    width: 300,
    height: 300,
    borderRadius: 150 
  },
  aboutMeText: {
    fontSize: 20
  }
})