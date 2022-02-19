import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUfIn_n5_6NxiLzTWLa_85pzayR8Omgnk",
  authDomain: "netflix-sunny-clone.firebaseapp.com",
  projectId: "netflix-sunny-clone",
  storageBucket: "netflix-sunny-clone.appspot.com",
  messagingSenderId: "629019923832",
  appId: "1:629019923832:web:f27cda9ee1d2f39ac3a48d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
