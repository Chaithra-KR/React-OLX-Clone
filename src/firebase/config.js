import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAy5bIytr6AY4Ua5tgv-EmL70ugKVJ919w",
    authDomain: "fir-fd53e.firebaseapp.com",
    projectId: "fir-fd53e",
    storageBucket: "fir-fd53e.appspot.com",
    messagingSenderId: "385403160140",
    appId: "1:385403160140:web:84022672420720882816e9",
    measurementId: "G-FK35R5JMSK"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;