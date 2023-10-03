import { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [text, setText] = useState('')
  const [buttonColor, setButtonColor] = useState('red')

  const phrases = [
    "Siga a luz",
    "Siga em frente, olhe para o lado",
    "Vigia!"
  ]

  function breakBiscuit() {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    setButtonColor('blue')

    setTimeout(() => {
      setButtonColor('red')
    }, 100)

    setText(phrases[randomIndex])
  }
    
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TouchableWithoutFeedback onPress={breakBiscuit}>
        <View style={{
          backgroundColor: buttonColor,
          padding: 10
      }}>
          <Text>Hello world</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    block: {
      flex: 1,
    },
    input: {
      height: 45,
      borderWidth: 1,
      margin: 10,
      padding: 10,
      fontSize: 20,
      borderRadius: 10
    },
    text: {
      textAlign: 'center',
      fontSize: 25
    },
    border: {
      height: 10,
      backgroundColor: 'grey'
    },
    colors: {
      blue: {
        backgroundColor: '#3af'
      },
      yellow: {
        backgroundColor: '#ff5'
      },
      purple: {
        backgroundColor: '#88f'
      }
    }
})