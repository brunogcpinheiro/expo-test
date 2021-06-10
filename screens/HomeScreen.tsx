import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { CurrentUserContext } from '../context/CurrentUserContext'

export default function Home() {
  const data = React.useContext(CurrentUserContext)

  return (
    <View style={styles.container}>
      <Text> {data?.email}</Text>
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
