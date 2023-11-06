import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  movieImage: {
    height: 300,
  },
  movieTitle: {
    fontSize: 18,
    paddingHorizontal: 15,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  selectedMovieTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#211E1E',
    color: '#fff'
  },
  selecetdMovieOverview: {
    fontSize: 18,
    paddingHorizontal: 16
  },
  maximizeImageButton: {
    backgroundColor: '#BA3636',
    alignItems: 'center',
    paddingVertical: 10
  },
  closeButton: {
    paddingVertical: 20,
    backgroundColor: '#211E1E'
  }
})