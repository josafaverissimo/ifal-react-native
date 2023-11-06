import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from './components/Header'
import Home from './components/Home'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>

      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
