import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './src/screens/Home'
import Userdata from './src/screens/Userdata'
import Profile from './src/screens/Profile'


const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Userdata"
          component={Userdata}
          options={{
            tabBarLabel: 'Meus dados',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="database" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="card-account-details-outline" color={color} size={26} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
