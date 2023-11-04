import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from './screens/HomeScreen'
import WorthItScreen from './screens/WorthItScreen'


const Stack = createNativeStackNavigator()

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='WorthItScreen' component={WorthItScreen}/>
    </Stack.Navigator>
  )
}