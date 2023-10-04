import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
    const [img, setImg] = useState(require('./assets/cookies.jpeg'))
    const [phrase, setPhrase] = useState()
    const phrases = [
        'você deu sorte!',
        'muito bom',
        'parabéns',
        'isso aí'
    ]

    function quebraBiscoito() {
        const randomIndex = Math.floor(Math.random() * phrases.length)

        setPhrase(phrases[randomIndex])
        setImg(require('./assets/cookies-mastigado.jpeg'))
    }

    function resetaBiscoito() {
        setPhrase('')
        setImg(require('./assets/cookies.jpeg'))
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
