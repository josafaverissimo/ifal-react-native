import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, FlatList} from 'react-native';

export default function App() {
    const [feed, setFeed] = useState([
        {id: '1', nome: "Josafá Veríssimo", idade: '21'},
        {id: '2', nome: "Jeremias Verissimo", idade: '19'},
        {id: '3', nome: "Mel Issa", idade: '23'},
        {id: '4', nome: "Icaro Ferreira", idade: '26'},
        {id: '5', nome: "Silvio Santos", idade: '99'},
    ])
    
    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={feed}
                renderItem={({item}) => <Pessoa data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    areaPessoa: {
        backgroundColor: 'black',
        height: 200,
        marginBottom: 15,
        justifyContent: 'center'
    },
    textoPessoa: {
        color: '#fff',
        fontSize: 20
    }
})

function Pessoa(props) {
    return (
     <View style={styles.areaPessoa}>
         <Text style={styles.textoPessoa}>{props.data.nome}</Text>
         <Text style={styles.textoPessoa}>{props.data.idade}</Text>
     </View>   
    )
}