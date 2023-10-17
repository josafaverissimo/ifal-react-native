import styles from './styles'
import { useState } from "react"
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity
} from "react-native";

import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

export default function MainForm(props) {
  const [nameInputValue, setNameInputValue] = useState(props.userDataset?.name || '')
  const [ageInputValue, setAgeInputValue] = useState(props.userDataset?.age || '')
  const [genreInputValue, setGenreInputValue] = useState(props.userDataset?.genre || 'masculino')
  const [creditInputValue, setCreditInputValue] = useState(props.userDataset?.credit || 300)
  const [isStudentInputValue, setIsStudentInputValue] = useState(props.userDataset?.isStudent || false)

  function getCreditFormatted() {
    if(creditInputValue === '') return ''

    return `R\$${Number(creditInputValue).toFixed(2).replace('.', ',')}`
  }

  function setUserDataset() {
    const userDataset = {
      name: nameInputValue,
      age: ageInputValue,
      genre: genreInputValue,
      credit: creditInputValue,
      isStudent: isStudentInputValue
    }

    props.setUserDataset(userDataset)
  }
  
  return (
    <ScrollView>
      <View style={styles.formWrapper}>
        <View>
          <Text style={styles.form.label}>Nome</Text>
          <TextInput
            style={styles.form.inputText}
            value={nameInputValue}
            onChangeText={setNameInputValue}
            placeholder="Digite seu nome"
          />
        </View>

        <View>
          <Text style={styles.form.label}>Idade</Text>
          <TextInput
            style={styles.form.inputText}
            value={ageInputValue}
            onChangeText={setAgeInputValue}
            placeholder="Digite sua idade"
            keyboardType="numeric"
          />
        </View>

        <View>
          <Text style={styles.form.label}>Sexo</Text>
          <Picker
            style={styles.form.inputPicker}
            selectedValue={genreInputValue}
            onValueChange={setGenreInputValue}
          >
            <Picker.Item label="masculino" value="masculino"/>
            <Picker.Item label="feminino" value="feminino" />
          </Picker>
        </View>

        <View>
          <Text style={styles.form.label}>
            Limite de crédito: {getCreditFormatted()}
          </Text>
          <Slider
            value={creditInputValue}
            onValueChange={setCreditInputValue}
            style={{height: 50}}
            minimumValue={100}
            maximumValue={5000}
            maximumTrackTintColor="#f00"
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.form.label, {alignSelf: 'center'}]}>Estudante?</Text>
          <Switch
            trackColor={{
              false: '#ccc',
              true: '#4A9AF0'
            }}
            thumbColor={isStudentInputValue ? '#4A66F0': '#eee'}
            value={isStudentInputValue}
            onValueChange={setIsStudentInputValue}
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={setUserDataset}>
          <View>
            <Text style={{textAlign: 'center'}}>Abrir conta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}