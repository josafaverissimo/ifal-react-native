import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from './screens/HomeScreen'
import WhatIsBetter from './screens/WhatIsBetter'


const Stack = createStackNavigator()

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen
        name='WhatIsBetterScreen'
        component={WhatIsBetter}
      />
    </Stack.Navigator>
  )
}