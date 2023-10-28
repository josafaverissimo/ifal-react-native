import styles from './styles'

import { useEffect } from 'react'

import { View, Text } from 'react-native'

export default function Home({ route, navigation}) {
  const { username } = route.params

  useEffect(() => {
    if(!route.params.isLogged) {
      navigation.navigate('Login')
    }
  }, [route.params.isLogged])

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 32}}>Bem vindo {username}</Text>
      </View>
    </View>
  )
}