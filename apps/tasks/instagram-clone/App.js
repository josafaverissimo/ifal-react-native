import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import InstagramClone from './src/components/InstagramClone'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />

      <InstagramClone />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
