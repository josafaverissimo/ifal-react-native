import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
    const [name, setName] = useState('')
    const [input, setInput] = useState('')
    

    function entrar() {
        if(input === '') {
            alert("Digite seu nome!")
            return
        }

        setName(`Bem-vindo ${input}`)
    }
    
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Type your name"
            />

            <Button title="Entrar" onPress={entrar} />

            <Text style={{styles.texto}}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 68
    },
    input:  {
        height: 45,
        borderWidth: 1,
        padding: 10,
        fontSize: 20             
    },
    texto: {
        textAlign: center,
        fontSize: 25
    }
})