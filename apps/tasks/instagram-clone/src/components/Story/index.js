import styles from './styles'

import { View, Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

export default function Story({image}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#fdf497', '#fdf497', '#fd5949', '#d6249f']}
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        style={styles.storyBorder}
      >
        <Image
          style={styles.image}
          source={{uri: image}}
        />
      </LinearGradient>
    </View>
  )
}