import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Login from '../components/auth/Login'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Login />
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
