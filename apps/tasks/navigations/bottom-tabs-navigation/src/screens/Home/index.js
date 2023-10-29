import styles from './styles'

import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const [cep, setCep] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>BuscaCEP App</Text>
      </View>

      <View>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Digite o CEP</Text>
            <TextInput
              style={styles.input}
              placeholder='CEP'
              keyboardType='numeric'
              value={cep}
              onChangeText={setCep}
            />
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <View>
              <Text>Buscar CEP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.info}>
          <View style={styles.details}>
            <Text style={styles.detail}>Seu CEP: {cep}</Text>
            <Text style={styles.detail}>Logradouro: </Text>
            <Text style={styles.detail}>Rua: </Text>
            <Text style={styles.detail}>Cidade: </Text>
            <Text style={styles.detail}>Estado: </Text>
          </View> 
        </View>
      </View>
    </SafeAreaView>
  )
}