import styles from './styles'
import { SafeAreaView } from "react-native-safe-area-context"
import { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import Header from '../../components/Header'
import NewsApi from '../../services/myNews'
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyBoard,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native'


const newsApi = new NewsApi()

export default function HomeScreen({navigation}) {
  useEffect(() => {
    searchTerm(termSearched)
  }, [])

  const [termInput, setTermInput] = useState('')
  const [termSearched, setTermSearched] = useState('tesla')
  const [newsData, setNewsData] = useState([])
  const [isLoadingNewsData, setIsLoadingNewsData] = useState(true)

  function goToNews(newsData) {
    const {
      author,
      title,
      description,
      publishedAt,
      url,
      urlToImage: image
    } = newsData

    navigation.navigate('NewsScreen', {
      author,
      title,
      description,
      publishedAt,
      url,
      image
    })
  }

  async function searchTerm(search) {
    setIsLoadingNewsData(true)

    if(search === '') {
      Alert.alert('Insira algum valor', 'O valor informado está vazio')

      return
    }

    const response = await newsApi.getNews(search)
    const json = await response.json()

    setTermSearched(search)
    setNewsData(json.articles)

    setIsLoadingNewsData(false)
  }

  function renderNews({item}) {
    const {
      title,
      author,
      urlToImage: image
    } = item

    return (
      <View style={styles.news.container}>
        <TouchableOpacity
          onPress={() => goToNews(item)}
        >
          <View>
            <Image
              source={{
                uri: image
              }}
              style={styles.news.image}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.news.actions.container}>
          <Feather style={styles.news.actions.icon} name="star"/>
          <Feather style={styles.news.actions.icon} name="send"/>
        </View>
        
        <TouchableOpacity onPress={() => goToNews(item)}>
          <View style={styles.news.textWrapper}>
            <Text style={styles.news.author}>{author}</Text>
            <Text style={styles.news.title}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.search.container}>
        <Text style={styles.search.title}>
          Procure Sobre algum tema
        </Text>

        <View style={styles.search.wrapper}>
          <TextInput
            style={styles.input}
            value={termInput}
            onChangeText={setTermInput}
            placeholder='Pesquisar'
            placeholderTextColor='#eee'
          />

          <TouchableOpacity onPress={() => searchTerm(termInput)}>
            <Feather style={styles.search.button} name="search" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content.container}>
        <Text style={styles.content.header}>
          Exibindo resultados de&nbsp;
          <Text style={styles.content.termSearched}>{termSearched}</Text>
        </Text>
        
        {
          isLoadingNewsData ?
          <ActivityIndicator size="large" /> :
          <View style={{flex: 1}}>
            <FlatList
              data={newsData}
              renderItem={renderNews}
            />
          </View>
        }
      </View>
    </SafeAreaView>
  )
}