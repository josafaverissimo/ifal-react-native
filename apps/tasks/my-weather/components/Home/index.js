import styles from './styles'
import { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import WeatherApi from '../../services/WeatherApi'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image
} from 'react-native'


const weatherApi = new WeatherApi()

export default function Home() {
  useEffect(() => {
    getCityWeatherData(cityTyped)
  }, [])

  const [cityInput, setCityInput] = useState('')
  const [cityTyped, setCityTyped] = useState('Maceio')
  const [cityWeatherData, setCityWeatherData] = useState({})
  const [isCityWeatherDataLoading, setIsCityWeatherDataLoading] = useState(true)

  async function  getCityWeatherData(city) {
    setIsCityWeatherDataLoading(true)

    if(city === '') {
      Alert.alert('Informe algum valor', 'A cidade informada está vazia')

      return
    }

    const response = await weatherApi.getWeatherByCity(city)
    const json = await response.json()

    if(json.cod === '404') {
      Alert.alert('Cidade incorreta', 'Digite uma nova cidade')

      getCityWeatherData('Maceio')

      return
    }

    setCityWeatherData(json)
    setCityTyped(city)
    setIsCityWeatherDataLoading(false)
  }

  function getWeatherIcon() {
    return `https://openweathermap.org/img/wn/${cityWeatherData.weather[0].icon}@2x.png`
  }

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={{width: '70%', gap: 5, marginTop: 10}}>
          <Text style={styles.label}>Informe a cidade</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              value={cityInput}
              onChangeText={setCityInput}
              style={styles.input}
              placeholder='Digite a cidade'
              placeholderTextColor='#fff'
            />

            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => getCityWeatherData(cityInput)}
            >
              <Feather style={styles.searchButtonIcon} name="search"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.contentWrapper}>
        {
          isCityWeatherDataLoading ?
          <ActivityIndicator size="large" /> :
          <View>
            <Text style={styles.cityTyped}>Exibindo dados de {cityTyped}</Text>

            <View style={{alignItems: 'center'}}>
              <Image
                style={styles.image}
                source={{
                  uri: getWeatherIcon()
                }}
              />

              <Text style={styles.temp}>
                {cityWeatherData.main.temp}ºC
              </Text>
            </View>
          </View>
        }
      </View>
    </View>
  )
}