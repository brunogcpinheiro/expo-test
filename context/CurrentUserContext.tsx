import * as React from 'react'
import firebase from 'firebase'

interface CurrentUser {
  email: string | null
  name?: string
}

interface CurrentUserProviderProps {
  children: React.ReactNode
}

export const CurrentUserContext = React.createContext<CurrentUser | null>(null)

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const [currentUser, setCurrentUser] = React.useState<CurrentUser | null>(null)

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(async userState => {
      if (userState?.uid) {
        const response = await firebase
          .firestore()
          .collection('users')
          .doc(userState?.uid)
          .get()

        const currentUserData = response.data() as CurrentUser

        setCurrentUser(currentUserData)

        return
      }

      setCurrentUser({} as CurrentUser)
    })
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  )
}
