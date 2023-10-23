import styles from './styles'

import { View, Text, FlatList } from 'react-native'

import Story from '../Story'

export default function StoriesBar() {
  const stories = [
    {image: 'https://chefbob.com.br/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg'},
    {image: 'https://www.nicelembrancinhas.com.br/image/cache/catalog/URSINHO%20POOH/POOH-650x650.jpg'},
    {image: 'https://avatars.githubusercontent.com/u/50150682?v=4'},
    {image: 'https://i.pinimg.com/originals/0d/1b/96/0d1b96b852fec5c24aa1378f192df9af.jpg'},
    {image: 'https://static.cdn.pleno.news/2021/02/Keanu-Reeves.jpg'},
    {image: 'https://thispersondoesnotexist.com/'},
    {image: 'https://akns-images.eonline.com/eol_images/Entire_Site/20211011/rs_1200x1200-211111040222-1200-Zendaya-cfda-111121.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top'},
    {image: 'https://www.midiorama.com/wp-content/uploads/2018/07/celebridades-gamers-920x625.png'}
  ]

  const renderStory = data => {
    return (
      <View style={{marginHorizontal: 6}}>
        <Story image={data.item.image} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={stories}
        renderItem={renderStory}
      />
    </View>
  )
}