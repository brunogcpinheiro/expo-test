import firebase from 'firebase'
import * as React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import { CurrentUserContext } from '../context/CurrentUserContext'

export default function Home() {
  const data = React.useContext(CurrentUserContext)

  function handleLogout() {
    firebase.auth().signOut()
  }

  return (
    <View style={styles.container}>
      <Text>Bem vindo, {data?.name}!</Text>

      <Text>Seu email.: {data?.email}</Text>
      <Button mode="contained" style={{ marginTop: 30 }} onPress={handleLogout}>
        <Text>Sair</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 40
  }
})
