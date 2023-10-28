import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"

import Login from './src/screens/Login'
import Home from './src/screens/Home'
import LogoutButton from './src/components/LogoutButton'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{isLogged: false}}
          options={({navigation}) => ({
            headerLeft: null,
            headerRight: () => (
              <LogoutButton onPress={() => navigation.setParams({isLogged: false})}/>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
