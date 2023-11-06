import styles from './styles'
import { View, Text, StatusBar } from 'react-native'

export default function Header()  {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='#31CCEB'
        barStyle='dark-content'
      />
      <Text style={styles.title}>KirisWeather</Text>
    </View>
  )
}