import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity SafeAreaView} from 'react-native';

export default function App() {
    const [img, setImg] = useState(require('./src/biscoito.png'))
    const [text, setText] = useState('')

    let frases = [
        "Siga os bons e aprenda com eles",
        "Seja honesto e ganhará o mundo",
        "Seja torcedor do palmeiras e seja eternamente feliz",
        "A maior barreira para o sucesso é o medo do fracasso",
        "Deixa de lado as preocupações e seja feliz"
    ]

    function quebraBiscoito() {
        const randomIndex = Math.floor(Math.random() * frases.length)

        setImg(require('./src/biscoito-quebrado.jpg'))
        setText(`"${frases[randomIndex]}"`)
    }

    function resetaBiscoito() {
        setImg(require('./src/biscoito.png'))
        setText("")
    }
    
    return (
        <SafeAreaView>
            <StatusBar />

            <Image
                source={img}
                style={styles.img}
            />

            <Text style={styles.texto}> {text} </Text>
            <TouchableOpacity
                style={[styles.botao, {marginTop: 40}, {borderColor: "black"}]}
                onPress={quebraBiscoito}
            >
                <View style={styles.btnarea}>
                    <Text style={styles.btntexto}>Quebrar Biscoito</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.botao, {borderColor: "black"}]}
                onPress={resetaBiscoito}
            >
                <View style={styles.btnarea}>
                    <Text style={styles.btntexto}>Resetar Biscoito</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 68
    }
})