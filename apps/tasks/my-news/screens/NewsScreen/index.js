import * as Animatable from 'react-native-animatable'
import styles from './styles'
import { SafeAreaView } from "react-native-safe-area-context"
import Header from '../../components/Header'
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'

export default function HomeScreen({route, navigation}) {
  const {
    author,
    title,
    description,
    publishedAt,
    url,
    image
  } = route.params

  function formatDateToBr(date) {
    date = new Date(date)

    const day = String(date.getDay()).padStart(2, '00')
    const month = String(date.getMonth() + 1).padStart(2, '00')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header popStack={true}/>

      <ScrollView>
        <Animatable.View
          style={styles.content.container}
          animation="fadeInRight"
        >
          <Text style={styles.content.title}>{title}</Text>
          <Image
            source={{
              uri: image
            }}
            style={styles.image}
          />
          <View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15
            }}>
              <Text style={styles.content.author}>{author}</Text>
              <Text style={styles.content.publishedAt}>
                {formatDateToBr(publishedAt)}
              </Text>
            </View>
            
            <Text style={{
              paddingHorizontal: 15,
              color: '#ccc',
              fontStyle: 'italic'
            }}>{url}</Text>
          </View>
          <Text style={styles.content.description}>{description}</Text>
          </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  )
}