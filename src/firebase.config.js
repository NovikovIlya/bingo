import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_vN4xB-2UPviEZRZjlc3JaPNwXcx_wW0",
  authDomain: "bingo-ef543.firebaseapp.com",
  projectId: "bingo-ef543",
  storageBucket: "bingo-ef543.appspot.com",
  messagingSenderId: "461446988848",
  appId: "1:461446988848:web:97d1ac44677a7635bbd9f5",
  measurementId: "G-JWFEQL4MBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore.firestore();

export default db;