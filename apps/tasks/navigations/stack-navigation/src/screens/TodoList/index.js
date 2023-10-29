import styles from './styles'

import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text } from 'react-native'

export default function TodoList() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}