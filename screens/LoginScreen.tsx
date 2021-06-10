import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import LoginForm from '../components/auth/LoginForm'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginForm />
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
