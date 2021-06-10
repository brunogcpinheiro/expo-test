import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import './configs/firebaseInitializer'
import { CurrentUserProvider } from './context/CurrentUserContext'
import AppRoutes from './routes/app.routes'

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
      <StatusBar style="light" />

      <CurrentUserProvider>
        <AppRoutes />
      </CurrentUserProvider>
    </PaperProvider>
  )
}
