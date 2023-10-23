import styles from './styles'

import { View, Image, Text } from 'react-native'

import { Feather, Entypo, Octicons } from '@expo/vector-icons'

export default function Post({
  userImage,
  userName,
  postBodyImage,
  postDescription
}) {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <Image
            style={styles.userImage}
            source={{uri: userImage}}
          />

          <Text>{userName}</Text>
        </View>

        <Entypo name="dots-three-vertical" size={16} color="black" />
      </View>

      <View>
        <Image
          style={styles.postBodyImage}
          source={{uri: postBodyImage}}
        />
      </View>

      <View style={styles.postFooter}>
        <View style={styles.postFooterActions}>
          <View style={styles.postFooterMainActions}>
            <Feather name='heart' size={20} color='black' />
            <Feather name="message-circle" size={20} color="black" />
            <Feather name="send" size={20} color="black" />
          </View>

          <Octicons name="bookmark" size={20} color="black" />
        </View>

        <Text>
          {postDescription}
        </Text>
      </View>
    </View>
  )
}