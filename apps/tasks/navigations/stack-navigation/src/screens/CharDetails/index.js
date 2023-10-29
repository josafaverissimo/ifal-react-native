import styles from './styles'

import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'

export default function CharDetails({route, navigation}) {
  const { charData } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: 23}}>Esse é o personagem {charData.name}</Text>
        <Text style={{fontSize: 23}}>Seu papel é de {charData.role}</Text>
      </View>
    </SafeAreaView>
  )
}