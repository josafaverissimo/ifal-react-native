import styles from './styles'

import { View, Text } from 'react-native'

import { Feather } from '@expo/vector-icons'

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>

      <View style={styles.icons}>
        <Feather name='heart' size={24} />
        <Feather name="message-circle" size={24} color="black" />
      </View>
    </View>
  )
}