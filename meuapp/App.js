import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={[styles.titulo]}>Josafá Verísimo Gomes</Text>
            <Text style={[styles.titulo]}>Cientista da computação</Text>
            <Text style={[styles.subtitulo]}>IAHUUUU IAHUUUUUU</Text>

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
    titulo: {
        fontSize: 40,
        color: '#f00'
    },
    subtitulo: {
        color: '#0f0',
        fontSize: 30,
        marginTop: 15
    }
});
