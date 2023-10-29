import styles from './styles'

import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text, TouchableOpacity, FlatList } from 'react-native'

function CharRow({index, charData, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.charRow, {
        backgroundColor: index % 2 === 0 ? '#fff' : '#ddd'
      }]}
      onPress={onPress}
    >
      <View>
        <Text style={{fontSize: 19}}>{charData.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default function Home({ navigation }) {
  const characters = [
    {name: 'Josafa', role: 'dev'},
    {name: 'Ryder', role: 'qa'},
    {name: 'Honey', role: 'the boss'}
  ]

  const renderCharRow = ({item, index}) => {
    return (
      <CharRow
        index={index}
        charData={item}
        onPress={() => navigation.navigate('CharDetails', {charData: item})}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Seja bem-vindo</Text>
      </View>

      <View style={styles.chooseChar}>
        <Text style={{fontSize: 20, paddingVertical: 10, textAlign: 'center'}}>
          Escolha algum personagem abaixo
        </Text>

        <FlatList
          data={characters}
          renderItem={renderCharRow}
        />
      </View>
    </SafeAreaView>
  )
}