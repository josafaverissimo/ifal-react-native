import styles from './styles'

import { View, Text, TouchableOpacity } from 'react-native'

export default function LogoutButton({onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <View>
        <Text>Logout</Text>
      </View>
    </TouchableOpacity>
  )
}
