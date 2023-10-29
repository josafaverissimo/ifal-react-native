import styles from './styles'

import { useState } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native'

const users = {
  josafa: {
    password: '12345'
  },
  honeyPooh: {
    password: '54321'
  }
}

export default function Login({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const showErrorMessage = () => {
    Alert.alert('Dados incorretos', 'O usuário ou senha informados estão incorretos')
  }

  const doLogin = () => {
    if(users[username]?.password === password) {
      navigation.navigate('Home', {
        isLogged: true,
        username: username
      })

      return
    }

    showErrorMessage()
  }

  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <View style={[styles.form, {width: '70%'}]}>
          <Text style={styles.title}>Insira suas credenciais</Text>

          <TextInput
            style={styles.input}
            placeholder='Digite seu usuário'
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.input}
            placeholder='Digite sua senha'
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={doLogin}>
        <View>
          <Text style={styles.loginButtonText}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}