import globalStyles from '../styles'
import styles from './styles'
import { Text, TouchableOpacity, View } from "react-native";

export default function AccountCreated(props) {
  function editUserData() {
    props.editUserData(true)
  }

  function getCreditFormatted() {
    return `R\$${Number(props.userData.credit).toFixed(2).replace('.', ',')}`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Seja bem-vindo
        &nbsp;
        <Text style={styles.userName}>{props.userData.name}</Text>
        &nbsp;
        <Text style={{fontSize: 23}}>🙂</Text>
      </Text>

      <Text style={styles.text}>
        Confira abaixo os seus dados
      </Text>

      <View>
        <Text style={styles.list.item}>
          Nome: <Text style={styles.list.value}>{props.userData.name}</Text>
        </Text>

        <Text style={styles.text}>
          Idade: <Text style={styles.list.value}>{props.userData.age}</Text>
        </Text>

        <Text style={styles.list.item}>
          Sexo: <Text style={styles.list.value}>{props.userData.genre}</Text>
        </Text>

        <Text style={styles.list.item}>
          Limite de crédito:
          &nbsp;
          <Text style={styles.list.value}>{getCreditFormatted()}</Text>
        </Text>

        <Text style={styles.list.item}>
          É estudante?
          &nbsp;
          <Text style={styles.list.value}>
            {props.userData.isStudent ? 'sim' : 'não'}
          </Text>
        </Text>
      </View>

      <TouchableOpacity style={globalStyles.btn} onPress={editUserData}>
        <View>
          <Text style={{textAlign: 'center'}}>Editar dados</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}