import styles from './styles'

import { SafeAreaView } from "react-native-safe-area-context"

import { View, Text } from 'react-native'

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Perfil</Text>
      </View>

      <View style={styles.middle}>
        <View style={styles.details}>
          <Text style={styles.detail}>Nome: </Text>
          <Text style={styles.detail}>Email</Text>
          <Text style={styles.detail}>CEP: </Text>
          <Text style={styles.detail}>Cidade: </Text>
          <Text style={styles.detail}>Estado: </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
