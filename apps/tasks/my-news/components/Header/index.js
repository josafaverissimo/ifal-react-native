import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { StatusBar, View, Text, TouchableOpacity } from 'react-native'

export default function Header({popStack}) {
  const navigation = useNavigation()

  return (
    <View>
      <StatusBar
        backgroundColor='#232C33'
      />

      <View style={styles.header.container}>
        <View>
          <Text style={styles.header.title}>
            KirisNews
          </Text>
          <Text style={styles.header.subtitle}>
            O seu portal de notícias
          </Text>
        </View>
        
        {
          popStack === true ?
          <TouchableOpacity
            style={styles.header.popIcon.wrapper}
            onPress={() => navigation.pop()}
          >
            <Feather style={styles.header.popIcon.icon} name="arrow-left"/>
          </TouchableOpacity> :
          ''
        }
      </View>
    </View>
  )
}