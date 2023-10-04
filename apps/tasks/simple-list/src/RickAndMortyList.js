import { useState, useEffect } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'

export default function RickAndMorty() {
  const [isLoading, setIsLoading] = useState(true)
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState({})

  async function getSomeCharacters() {
    const randomPage = Math.floor(Math.random() * 41 + 1)
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${randomPage}`
    )
    const {results} = await response.json()
    const randomIndex = Math.floor(Math.random() * results.length)

    setCharacters(results)
    setSelectedCharacter(results[randomIndex])
    setIsLoading(false)
  }

  function renderCharacter({item}) {
    return (
      <TouchableOpacity
        style={[
          styles.characterBox,
          {backgroundColor: item.id % 2 === 0 ? "#ddd" : "#ccc"}
        ]}
        onPress={() => setSelectedCharacter(item)}
      >
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: item.image
            }}
            style={styles.characterImage}
          />
          <Text style={styles.characterName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    getSomeCharacters()
  }, [])
  
  return (
    <View style={styles.container}>
      { isLoading ? (
        <ActivityIndicator size="large" color="#95E872" />
       ) : (
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 3,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 30
            }}>
              <Image
                source={{uri: selectedCharacter.image}}
                style={{width: 150, height: 150}}
              />
              <Text>Nome: {selectedCharacter.name}</Text>
              <Text>Gênero: {selectedCharacter.gender}</Text>
              <Text>Espécie: {selectedCharacter.species}</Text>
            </View>

            <View style={{paddingHorizontal: 20}}>
              <TouchableOpacity
                style={styles.loadButton}
                onPress={() => {
                  setIsLoading(true)
                  getSomeCharacters()
                }}
              >
                <View>
                  <Text style={{fontSize: 19}}>Carregar outros</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{flex: 10}}>
              <FlatList
                data={characters}
                renderItem={renderCharacter}
              />
            </View>
          </View>
       )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  characterBox: {
    flex: 1,
    padding: 10
  },
  characterImage: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0f0f0f'
  },
  characterName: {
    alignSelf: 'center',
    fontSize: 17
  },
  loadButton: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#95E872',
    marginTop: 20,
    marginBottom: 10,
    padding: 9,
    borderRadius: 10
  },
  utils: {
    textAlignCenter: {textAlign: 'center'},
    bigFontSize: {fontSize: 30}
  }
})
