import * as React from 'react'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'

interface CurrentUser {
  email: string | null
}

interface CurrentUserProviderProps {
  children: React.ReactNode
}

export const CurrentUserContext = React.createContext<CurrentUser | null>(null)

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const [currentUser, setCurrentUser] = React.useState<CurrentUser | null>(null)

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(userState => {
      setCurrentUser(userState ?? ({} as CurrentUser))
    })
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  )
}
