import styles from './styles'
import MoviesApi from '../../services/MoviesApi'
import { useState, useEffect } from 'react'
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native'


const moviesApi = new MoviesApi()

export default function Home() {
  useEffect(() => {
    getMovies()
  }, [])

  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState({})
  const [isMoviesLoading, setMoviesLoading] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalFullImageVisible, setIsModalFullImageVisible] = useState(false)

  async function getMovies() {
    setMoviesLoading(true)

    const response = await moviesApi.getMovies()
    const json = await response.json()

    setMovies(json.results)

    setMoviesLoading(false)
  }

  function getMovieImage(posterPath) {
    return `https://image.tmdb.org/t/p/original/${posterPath}`
  }

  function toggleModal() {
    setIsModalVisible(!isModalVisible)
  }

  function selectMovie({
    title,
    overview,
    poster_path: posterPath,
  }) {
    setSelectedMovie({
      title,
      overview,
      posterPath
    })
    toggleModal()
  }

  function renderMovies({item}) {
    return (
      <View>
        <TouchableOpacity onPress={() => selectMovie(item)}>
          <Image
            source={{
              uri: getMovieImage(item.poster_path)
            }}
            style={styles.movieImage}
          />
          <Text style={styles.movieTitle}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  function toggleFullImageModal() {
    setIsModalFullImageVisible(!isModalFullImageVisible)
  }

  return (
    <View style={styles.container}>
      {
        isMoviesLoading ?
        <ActivityIndicator size="large"/> :
        <FlatList
          data={movies}
          renderItem={renderMovies}
        />
      }

      <Modal
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <ScrollView>
          <Text style={styles.selectedMovieTitle}>{selectedMovie.title}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={toggleModal}
          >
            <View>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 20
                }}
              >
                  Fechar Modal
              </Text>
            </View>
          </TouchableOpacity>
          <Image
            source={{
              uri: getMovieImage(selectedMovie.posterPath)
            }}
            style={{
              height: 300
            }}
          />
          <TouchableOpacity
            style={styles.maximizeImageButton}
            onPress={toggleFullImageModal}
          >
            <View>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>Ampliar imagem</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.selecetdMovieOverview}>{selectedMovie.overview}</Text>
        </ScrollView>
      </Modal>

      <Modal
        animationType="slide"
        visible={isModalFullImageVisible}
        onRequestClose={toggleModal}
      >
        <View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={toggleFullImageModal}
          >
            <View>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 20
                }}
              >
                  Fechar Modal
              </Text>
            </View>
          </TouchableOpacity>

          <Image
            source={{
              uri: getMovieImage(selectedMovie.posterPath)
            }}
            style={{
              height: '100%'
            }}
          />
        </View>
      </Modal>
    </View>
  )
}