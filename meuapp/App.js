import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-end'
        }}>
            <statusbar></statusbar>

            <View style={{width: 50, height: 50, backgroundColor: "black"}}></View>
            <View style={{width: 50, height: 50, backgroundColor: "red"}}></View>
            <View style={{width: 50, height: 50, backgroundColor: "green"}}></View>
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
