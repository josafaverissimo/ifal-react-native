import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from 'react-native'


export default function HomeScreen({ navigation }) {
  const [alcoholInputValue, setAlcoholInputValue] = useState('')
  const [gasolineInputValue, setGasolineInputValue] = useState('')

  const validForm = () => {
    if(alcoholInputValue === '' || gasolineInputValue === '') return false

    if(isNaN(Number(alcoholInputValue))) return false

    if(isNaN(Number(gasolineInputValue))) return false

    return true
  }

  const navigateToWhatIsBetterScreen = () => {
    if(!validForm()) {
      Alert.alert('Dados inválidos', 'Preencha todos campos corretamente.')

      return
    }

    navigation.navigate('WhatIsBetterScreen', {
      alcoholValue: Number(alcoholInputValue),
      gasolineValue: Number(gasolineInputValue)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#212121'}
      />

      <View style={styles.header}>
        <Image
          source={require('./../../assets/logo.png')}
          style={styles.image}
        />
        <Text
          style={[
            styles.bigText,
            styles.bold,
            styles.textColorWhite
          ]}
        >
          Qual é a melhor opção?
        </Text>
      </View>

      <View style={styles.form}>
        <Text
          style={[
            styles.midText,
            styles.bold,
            styles.textColorWhite
          ]}
        >
          Álcool (preço por litro):
        </Text>
        <TextInput
          keyboardType='numeric'
          value={alcoholInputValue}
          onChangeText={setAlcoholInputValue}
          style={styles.input}
        />

        <Text
          style={[
            styles.midText,
            styles.bold,
            styles.textColorWhite
          ]}
        >
          Gasolina (preço por litro):
        </Text>
        <TextInput
          keyboardType='numeric'
          value={gasolineInputValue}
          onChangeText={setGasolineInputValue}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={navigateToWhatIsBetterScreen}
        >
          <View>
            <Text
              style={[
                styles.midText,
                styles.bold,
                styles.textColorWhite
              ]}
            >
              Calcular
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 40
  },
  header: {
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200
  },
  form: {
    paddingHorizontal: 16,
    gap: 10
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 7
  },
  submitButton: {
    backgroundColor: '#ef4130',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 7,
    marginTop: 10
  },
  bold: {
    fontWeight: 'bold'
  },
  bigText: {
    fontSize: 28
  },
  midText: {
    fontSize: 18
  },
  textColorWhite: {
    color: 'white'
  }
})
