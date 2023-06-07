// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ZhwyIvH281vwUDwMg7H10LxzWies41M",
  authDomain: "lonbak-app.firebaseapp.com",
  projectId: "lonbak-app",
  storageBucket: "lonbak-app.appspot.com",
  messagingSenderId: "642322408518",
  appId: "1:642322408518:web:2babb32d8fd547d13ad647",
  measurementId: "G-N6HPEWJXGP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
