import styles from './styles'
import { View, Text, StatusBar } from 'react-native'

export default function Header()  {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='#211E1E'
        barStyle='light-content'
      />
      <Text style={styles.title}>KirisMovies</Text>
    </View>
  )
}