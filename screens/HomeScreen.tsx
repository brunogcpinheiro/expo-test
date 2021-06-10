import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button mode="outlined" onPress={() => navigation.navigate('Login')}>
        Login
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
