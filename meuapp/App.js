import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={{flex: 1, backgroundColor: "black"}}>
            <StatusBar></StatusBar>

            <View style={{width: 50, height: 50, backgroundColor: "red"}}></View>
            <View style={{width: 50, height: 50, backgroundColor: "yellow"}}></View>
            <View style={{width: 50, height: 50, backgroundColor: "blue"}}></View>
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
    titulo: {
        fontSize: 40,
        color: '#f00'
    },
    subtitulo: {
        color: '#0f0',
        fontSize: 30,
        marginTop: 15
    },
    textoAlinhado: {
        textAlign: "center"
    }
});
