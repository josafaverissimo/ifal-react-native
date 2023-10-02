import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
   const [name, setName] = useState('')

    function getName(input) {
        if(input.length > 0) {
            setName(`Bem-vindo(a) ${input}`)
        } else {
            setName('')
        }
    }
    
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Type your name"
                onChangeText={getName}
            />

            <Text style={{styles.texto}}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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