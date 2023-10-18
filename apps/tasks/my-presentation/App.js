import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import MyPresentation from './src/components/MyPresentation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>      
      <StatusBar
        backgroundColor='#52D9B0'
        barStyle={'dark-content'}
      />

      <View>
        <MyPresentation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
