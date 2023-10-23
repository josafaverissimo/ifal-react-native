import styles from './styles'

import { View, FlatList } from 'react-native'

import Post from '../Post'

export default function Posts() {
  const posts = [
    {
      userImage: 'https://www.nicelembrancinhas.com.br/image/cache/catalog/URSINHO%20POOH/POOH-650x650.jpg',
      userName: 'Honey Pooh',
      postBodyImage: 'https://images.tcdn.com.br/img/img_prod/557982/mel_puro_500g_1009_1_20200507094658.jpg',
      postDescription: 'Um dia sem um amigo é como um favo sem uma gota de mel.'
    },
    {
      userImage: 'https://media.licdn.com/dms/image/D4D03AQHhPzW2Mtv1Ww/profile-displayphoto-shrink_200_200/0/1691816821301?e=1703721600&v=beta&t=-mN6yMVOqP-sulNzavQ6EFguxfYL0nDQGF8amBQW82U',
      userName: 'Josafá V. Gomes',
      postBodyImage: 'https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F09%2FUntitled-design-14.jpg&signature=3de86691d6ab8d950654a02334fd2774',
      postDescription: 'Just code!'
    },
    {
      userImage: 'https://static.cdn.pleno.news/2021/02/Keanu-Reeves.jpg',
      userName: 'Keanu Reeves',
      postBodyImage: 'https://pyxis.nymag.com/v1/imgs/c55/17d/5877ffe1872b30a947000173a5af83e9d2-bullet-feed-lede.rsocial.w1200.jpg',
      postDescription: 'Bullet Time @josafaverissimo'
    },
  ]

  const renderPost = ({item: postData}) => {
    return <Post
      userImage={postData.userImage}
      userName={postData.userName}
      postBodyImage={postData.postBodyImage}
      postDescription={postData.postDescription}
    />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
      />
    </View>
  )
}