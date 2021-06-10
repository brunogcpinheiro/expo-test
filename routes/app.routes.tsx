import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import { CurrentUserContext } from '../context/CurrentUserContext'
import { useTheme } from 'react-native-paper'
import { ActivityIndicator, View } from 'react-native'

export default function AppRoutes() {
  const { colors } = useTheme()
  const data = React.useContext(CurrentUserContext)

  return data ? (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: colors.primary },
          headerTitleStyle: { color: '#fff' }
        }}>
        {data?.email ? (
          <Screen name="Home" component={HomeScreen} />
        ) : (
          <Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: true
            }}
          />
        )}
      </Navigator>
    </NavigationContainer>
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  )
}
