import styles from './styles'
import { useState } from "react";
import { View, Text } from "react-native";

import MainForm from './MainForm'
import AccountCreated from '../AccountCreated'

export default function MyForm() {
  const [userDataset, setUserDataset] = useState(null)
  const [editForm, setEditForm] = useState(true)

  function handlerUserDataset(userDataset) {
    setUserDataset(userDataset)
    setEditForm(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kiri's Bank</Text>

      {editForm
        ? <MainForm setUserDataset={handlerUserDataset} userDataset={userDataset} />
        : <AccountCreated userData={userDataset} editUserData={setEditForm}/>
      }
    </View>
  )
}