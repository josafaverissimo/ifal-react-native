import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import MyChronometer from './src/MyChronometer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={'#7243E8'}
      />
      
      <View style={{flex: 1}}>
        <MyChronometer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5331A8',
  }
});
