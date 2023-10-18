import styles from './styles'

import { useState } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native'

import AboutMeModal from './AboutMeModal'

export default function MyPresentation() {
  const [isAboutMeModalVisible, setIsAboutMeModalVisible] = useState(false)

  function openAboutMeModal() {
    setIsAboutMeModalVisible(true)
  }

  function closeAboutMeModal() {
    setIsAboutMeModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.introduction}>
        Olá me chamo Josafá. Sou um desenvolvedor fullstack PHP
      </Text>

      <TouchableOpacity style={styles.aboutMeButton} onPress={openAboutMeModal}>
        <View>
          <Text style={styles.aboutMeText}>Saiba mais sobre mim</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType='slide'
        visible={isAboutMeModalVisible}
      >
        <AboutMeModal closeModal={closeAboutMeModal}/>
      </Modal>
    </View>
  )
}