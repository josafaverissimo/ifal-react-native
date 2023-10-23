import styles from './styles'

import { View } from 'react-native'

import {
  Octicons,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons'

export default function FooterActions() {
  return (
    <View style={styles.container}>
      <Octicons name='home' size={21} color='black' />
      <Octicons name='search' size={21} color='black' />
      <Feather name="plus-square" size={21} color="black" />
      <MaterialCommunityIcons name="movie" size={21} color="black" />
      <MaterialIcons name="location-history" size={24} color="black" />
    </View>
  )
}