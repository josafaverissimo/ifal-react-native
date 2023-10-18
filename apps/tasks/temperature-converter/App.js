import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'

import TemperatureConverter from './src/components/TemperatureConverter'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#E02319'}
      />

      <View>
        <TemperatureConverter />
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
