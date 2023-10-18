import styles from './styles'

import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

export default function AboutMeModal({closeModal}) {
  return (
    <View style={styles.container}>
      <View style={styles.myImageWrapper}>
        <Image
          style={styles.myImage}
          source={require('../../../../assets/me.jpeg')}
        />
      </View>

      <Text style={styles.aboutMeText}>
        Olá, a quem interessar. Sou um desenvolvedor web e mobile
        a minha stack é: PHP/Laravel, Javascript/React|Angular e Java/Android
        sou um apaixonado por tecnologia e procuro sempre me manter
        atualizado para me manter relevante como um desenvolvedor fullstack.
      </Text>

      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <View>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}