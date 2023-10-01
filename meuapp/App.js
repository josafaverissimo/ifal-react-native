import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';

export default function App() {
  const animalsLinks = [
    "https://irisveterinaria.com.br/wp-content/uploads/2022/10/Confira-5-curiosidades-sobre-como-e-a-visao-do-cachorro.jpg",
    "https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg",
    "https://petcare.com.br/wp-content/uploads/2023/03/personalidade-cachorro-caramelo.jpg",
    "https://uploads.metropoles.com/wp-content/uploads/2023/06/07111232/Cachorro-com-frio-3.jpg",
    "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/75552.jpg?w=1600&h=1067",
    "https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1-1280x720.jpg",
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    "https://blog.hth.com.br/wp-content/uploads/2015/09/Cachorro-na-piscina-1140x500.jpg"
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animalLink, setAnimalLink] = useState(animalsLinks[currentIndex])

  function changeAnimal() {
    do {
      randomIndex = Math.floor(Math.random() * animalsLinks.length)
    } while(randomIndex === currentIndex)

    setCurrentIndex(randomIndex)
    setAnimalLink(animalsLinks[randomIndex])
  }

  return (
    <View style={styles.container}>
      <Button title="Gerar animal aleatório" onPress={changeAnimal} />

      <Image
        style={{width: 200, height: 200, marginTop: 20}}
        source={{
          uri: animalLink
        }}
      />

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
});
