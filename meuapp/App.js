import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    const phrases = [
        "Você será escolhido para algo grande!",
        "Desconfie de quem quem está a sua volta!",
        "Todos se levantarão contra ti",
        "Não desista"
    ]
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
    const [phrase, setPhrase] = useState(phrases[currentPhraseIndex])

    function changePhrase() {
        do {
            const randomIndex = Math.floor(Math.random() * phrases.length)
        } while(randomIndex === currentPhraseIndex)

        setCurrentPhraseIndex(randomIndex)
        setPhrase(phrase[currentPhraseIndex])
    }
    
    return (
        <View>
            <StatusBar></StatusBar>

            <Button onPress={changePhrase} title="Gere uma frase aleatória">
            <Text>{phrase}</Text>
        </View>
    );
}
