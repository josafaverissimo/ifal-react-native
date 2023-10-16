import { SafeAreaView, StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'


export default function Form() {
    const [nameInput, setNameInput] = useState('')
    const [ageInput, setAgeInput] = useState('')
    const [selectedSex, setSelectedSex] = useState()
    const [isStudent, setIsStudent] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text>Nome: </Text>
                <TextInput
                    value={nameInput}
                    onChangeText={text => setNameInput(text)}
                    style={{ paddingLeft: 50, paddingRight: 50, borderWidth: 1, borderColor: 'black' }}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text>Idade: </Text>
                <TextInput
                    value={ageInput}
                    onChangeText={text => setAgeInput(text)}
                    style={{ paddingLeft: 50, paddingRight: 50, borderWidth: 1, borderColor: 'black' }}
                />
            </View>

            <View>
                <Picker
                    selectedValue={'java'}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSex(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text>Estudante: </Text>
                <Switch
                    value={isStudent}
                    onValueChange={value => setIsStudent(value)}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
