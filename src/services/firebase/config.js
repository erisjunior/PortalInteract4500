import firebase from 'firebase'

const prodConfig = {
  apiKey: 'AIzaSyDCbxnfIZAC_ZQbeqy_hwcdXlnz1JHoB9k',
  authDomain: 'interact-4500.firebaseapp.com',
  databaseURL: 'https://interact-4500.firebaseio.com',
  projectId: 'interact-4500',
  storageBucket: 'interact-4500.appspot.com',
  messagingSenderId: '569035696221',
  appId: '1:569035696221:web:6db6e62058b05bfc'
}

const devConfig = {
  apiKey: 'AIzaSyDCbxnfIZAC_ZQbeqy_hwcdXlnz1JHoB9k',
  authDomain: 'interact-4500.firebaseapp.com',
  databaseURL: 'https://interact-4500.firebaseio.com',
  projectId: 'interact-4500',
  storageBucket: 'interact-4500.appspot.com',
  messagingSenderId: '569035696221',
  appId: '1:569035696221:web:6db6e62058b05bfc'
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

export default firebase.initializeApp(config)
export const auth = firebase.auth()
export const firebaseDatabase = firebase.database()
