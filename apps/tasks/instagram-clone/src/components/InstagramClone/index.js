import { View } from 'react-native'

import AppHeader from '../AppHeader'
import StoriesBar from '../StoriesBar'
import Posts from '../Posts'
import FooterActions from '../FooterActions'

export default function InstagramClone() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <AppHeader />
      </View>

      <View style={{flex: 2, justifyContent: 'center'}}>
        <StoriesBar />
      </View>

      <View style={{flex: 12}}>
        <Posts />
      </View>

      <View style={{flex: 1}}>
        <FooterActions />
      </View>
    </View>
  )
}