import React from 'react'
import { Button, TextInput, Text } from 'react-native-paper'
import firebase from 'firebase'

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLogin = async () => {
    setIsLoading(true)

    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

      await firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser?.uid)
        .set(
          {
            email
          },
          { merge: true }
        )

      console.log(response)
    } catch (e) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <TextInput
        mode="outlined"
        label="Email"
        placeholder="johndoe@email.com"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        mode="outlined"
        label="Senha"
        secureTextEntry
        style={{ marginTop: 6 }}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button
        style={{ marginTop: 14, borderRadius: 4, paddingVertical: 6 }}
        mode="contained"
        loading={isLoading}
        disabled={isLoading}
        onPress={handleLogin}>
        Entrar
      </Button>
    </>
  )
}
