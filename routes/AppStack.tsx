import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true
        }}>
        <Screen name="Home" component={HomeScreen} />

        <Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
