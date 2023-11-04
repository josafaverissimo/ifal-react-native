import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from './screens/HomeScreen'
import WorthItScreen from './screens/WorthItScreen'


const Stack = createStackNavigator()

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen
        name='WorthItScreen'
        component={WorthItScreen}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  )
}