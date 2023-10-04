import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
    const [img, setImg] = useState(require('./assets/biscoito.png'))
    const [phrase, setPhrase] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    const phrases = [
        'você deu sorte!',
        'muito bom',
        'parabéns',
        'isso aí'
    ]

    function quebraBiscoito() {
        let randomIndex

        do {
            randomIndex = Math.floor(Math.random() * phrases.length)
        } while(randomIndex === currentIndex)

        setCurrentIndex(randomIndex)
        setPhrase(phrases[currentIndex])
        setImg(require('./assets/biscoito-quebrado.jpg'))
    }

    function resetaBiscoito() {
        setPhrase('')
        setImg(require('./assets/biscoito.png'))
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: 65 }} />

            <Image style={styles.image} source={img} />

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.text}>{phrase}</Text>
            </View>

            <View style={{ flex: 2, justifyContent: 'center' }}>
                <TouchableOpacity
                    style={[styles.botao, { backgroundColor: 'red' }]}
                    onPress={quebraBiscoito}
                >
                    <View>
                        <Text style={styles.text}>generate phrase</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botao, { backgroundColor: 'pink' }]}
                    onPress={resetaBiscoito}
                >
                    <View>
                        <Text style={styles.text}>reset cookies</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ height: 65 }} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%'
    },
    botao: {
        padding: 20
    },
    text: {
        color: '#222',
        fontSize: 30
    }
});
