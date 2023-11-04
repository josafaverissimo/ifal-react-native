import { NavigationContainer, DefaultTheme } from "@react-navigation/native"

import Router from './routes'


const MyTheme = {
  colors: {
    background: '#212121'
  }
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
    </NavigationContainer>
  );
}
