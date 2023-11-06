import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import screens from './screens'


const Stack = createStackNavigator()

export default function Router() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS
      }}
    >
      <Stack.Screen name='HomeScreen' component={screens.home}/>
      <Stack.Screen name='NewsScreen' component={screens.news}/>
    </Stack.Navigator>
  )
}