import styles from './styles'

import { useEffect } from 'react'

import { View, Text } from 'react-native'

export default function Home({ route, navigation}) {
  useEffect(() => {
    if(!route.params.isLogged) {
      navigation.navigate('Login')
    }
  }, [route.params.isLogged])

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text>Bem vindo usuário</Text>
      </View>
    </View>
  )
}