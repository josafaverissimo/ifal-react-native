import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('josafa')
  const [age, setAge] = useState(25)

  function change() {
    setName("josafa aluno")
    setAge(27)
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>{name} - {age}</Text>

      <Button title="mudar nome e idade" onPress={() => change()} style={{
        backgroundColor: '#0f0'
      }}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
