import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import './configs/firebaseInitializer'
import { CurrentUserContext } from './context/CurrentUserContext'
import AppStack from './routes/AppStack'

const themeConfigs: typeof DefaultTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4E342E'
  }
}

export default function App() {
  return (
    <PaperProvider theme={themeConfigs}>
      <StatusBar backgroundColor="transparent" translucent />
      <AppStack />
    </PaperProvider>
  )
}
