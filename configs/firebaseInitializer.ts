import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyD5Kc1TUPMZusMVfUhsFmHXwh7PC2kiHtg',
  authDomain: 'expo-test-70e09.firebaseapp.com',
  projectId: 'expo-test-70e09',
  storageBucket: 'expo-test-70e09.appspot.com',
  messagingSenderId: '305279024487',
  appId: '1:305279024487:web:76ee9ffde3cd53ec0003c2'
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
