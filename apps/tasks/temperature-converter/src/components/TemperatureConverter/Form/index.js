import styles from './styles'

import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'

import { useState } from 'react'

import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'


export default function Form() {
  const [celsiusTemperatureString, setCelsiusTemperatureString] = useState('0')
  const [celsiusTemperatureNumber, setCelsiusTemperatureNumber] = useState(0)
  const [temperatureToConverter, setTemperatureToConverter] = useState('f')
  const [sliderMinimumValue, setSliderMinimumValue] = useState(0)
  const [sliderMaximumValue, setSliderMaximumValue] = useState(1000)
  const sliderValueOffset = 500
  const conversionFormulasByTemperatureUnit = {
    f(celsius) {
      return (celsius * 9/5) + 32
    },
    k(celsius) {
      return celsius + 273.15
    }
  }

  function formatBrNumber(number) {
    return String(number).replace('.', ',')
  }

  function removeBrFormat(number) {
    return Number(String(number).replace(',', '.'))
  }

  function handlerCelsiusTemperature(celsiusTemperatureValue) {
    const celsiusTemperatureValueNumber = removeBrFormat(celsiusTemperatureValue)

    if(celsiusTemperatureValueNumber > sliderMaximumValue) {
      setSliderMaximumValue(celsiusTemperatureValueNumber + sliderValueOffset)
    }

    if(celsiusTemperatureValueNumber < sliderMinimumValue) {
      setSliderMinimumValue(celsiusTemperatureValueNumber - sliderValueOffset)
    }

    setCelsiusTemperatureString(formatBrNumber(celsiusTemperatureValue))
    if(!isNaN(celsiusTemperatureValueNumber)) setCelsiusTemperatureNumber(celsiusTemperatureValueNumber)
  }

  function incrementMaximumSliderValue() {
    setSliderMaximumValue(sliderMaximumValue + 1)
  }

  function decrementMinumumSliderValue() {
    setSliderMinimumValue(sliderMinimumValue - 1)
  }

  function convertCelsius() {
    const temperatureConverted = conversionFormulasByTemperatureUnit[temperatureToConverter](celsiusTemperatureNumber)
      .toFixed(2)
    const temperatureUnit = temperatureToConverter === 'f' ? 'ºF' : 'K'
    return `${temperatureConverted}${temperatureUnit}`
  }

  return (
    <View>
      <View>
        <Text style={styles.label}>Temperatura em ºC</Text>
        <TextInput
          value={celsiusTemperatureString}
          onChangeText={handlerCelsiusTemperature}
          placeholder='Digite a temperatura'
          keyboardType='numeric'
          style={styles.input}
        />
        <Slider
          style={styles.slider}
          value={celsiusTemperatureNumber}
          onValueChange={handlerCelsiusTemperature}
          minimumValue={sliderMinimumValue}
          maximumValue={sliderMaximumValue}
        />
        
        <View style={styles.sliderRangeWrapper}>
          <TouchableOpacity style={styles.sliderRangeActionButton} onPress={decrementMinumumSliderValue}>
            <View>
              <Feather name='minus'style={styles.sliderRangeAction} />
            </View>
          </TouchableOpacity>

          <Text style={styles.sliderRange}>
            de {sliderMinimumValue} até {sliderMaximumValue}
            </Text>

          <TouchableOpacity style={styles.sliderRangeActionButton} onPress={incrementMaximumSliderValue}>
            <View>
              <Feather name='plus' style={styles.sliderRangeAction} />
            </View>
          </TouchableOpacity>
        </View>

        <Picker
          style={styles.picker}
          selectedValue={temperatureToConverter}
          onValueChange={setTemperatureToConverter}
        >
          <Picker.Item value="f" label="Fahrenheit"/>
          <Picker.Item value='k' label='Kelvin' />
        </Picker>

        <Text style={styles.temperatureConverted}>{convertCelsius()}</Text>
      </View>
    </View>
  )
}