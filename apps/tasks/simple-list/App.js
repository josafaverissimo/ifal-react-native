import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import RickAndMortyList from './src/RickAndMortyList';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={"#95E872"}
        barStyle={"dark-content"}
      />
      <Text 
        style={{
          fontSize: 18,
          marginVertical: 10,
          textAlign: 'center',
          paddingVertical: 10,
          paddingBottom: 20
        }}>
          Personagens Aleatórios de Rick and Morty
        </Text>

      <View style={{flex: 10}}>
        <RickAndMortyList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0"
  },
});
