import styles from './styles'

import { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

import { SafeAreaView } from 'react-native-safe-area-context'

export default function Userdata() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Meus Dados</Text>
      </View>

      <View style={styles.middle}>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <TextInput
              label='Nome'
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              label='Email'
              value={email}
              onChangeText={setEmail}
            />
          </View>



          <Button
            type='elevated'
            icon="content-save"
            mode="elevated"
            onPress={() => console.log('Pressed')}
          >
            Salvar
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}