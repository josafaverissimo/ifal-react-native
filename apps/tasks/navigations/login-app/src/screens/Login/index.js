import styles from './styles'

import { useState } from 'react'

import {
  View,
  Text,
  Button,
  TextInput,
  Alert
} from 'react-native'

const users = {
  josafa: {
    password: '12345'
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
        username: users[username]
      })

      return
    }

    showErrorMessage()
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Login Page</Text>

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

      <Button
        title='Login'
        onPress={doLogin}
      />
    </View>
  )
}