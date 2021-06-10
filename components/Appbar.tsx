import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar as PaperAppbar } from 'react-native-paper'

const Appbar = () => {
  return (
    <PaperAppbar.Header>
      <PaperAppbar.Content title="CLF" />
    </PaperAppbar.Header>
  )
}

export default Appbar
