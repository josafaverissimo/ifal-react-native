import { SafeAreaView } from 'react-native-safe-area-context'
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'


export default function WhatIsBetter({ route, navigation }) {
  const { alcoholValue, gasolineValue } = route.params

  const whatIsBetter = () => {
    const result = alcoholValue / gasolineValue

    return result < 0.7 ? 'Álcool' : 'Gasolina'
  }

  const backToHome = () => {
    navigation.pop()
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#212121'}
      />
      
      <View style={styles.header}>
        <Image
          source={require('./../../assets/gas.png')}
          style={styles.image}
        />
        <Text
          style={[
            styles.bigText,
            styles.bold,
            styles.textColorGreen
          ]}
        >
          Compensa usar {whatIsBetter()}
        </Text>
      </View>

      <View style={styles.prices}>
        <Text
          style={[
            styles.textColorWhite,
            styles.bold,
            styles.bigText
          ]}
        >
          Com os preços:
        </Text>

        <Text
          style={[
            styles.textColorWhite,
            styles.midText
          ]}
        >
          Álcool: R$ {parseFloat(alcoholValue).toFixed(2)}
        </Text>

        <Text
          style={[
            styles.textColorWhite,
            styles.midText
          ]}
        >
          Gasolina: R$ {parseFloat(gasolineValue).toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity style={styles.recalculateButton} onPress={backToHome}>
          <View>
            <Text
              style={[
                styles.midText,
                styles.bold,
                styles.textColorRed
              ]}
            >Calcular novamente</Text>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  prices: {
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 7
  },
  recalculateButton: {
    borderWidth: 2,
    borderColor: '#ef4130',
    alignItems: 'center',
    paddingVertical: 5,
    width: '70%',
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
  },
  textColorGreen: {
    color: '#30ef5a'
  },
  textColorRed: {
    color: '#ef4130'
  }
})
