import firebase from "firebase/app"
imports "firebase/auth"

const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIERBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIERBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIERBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIERBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIERBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIERBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIERBASE_MEASUREMENT_ID
  };
  