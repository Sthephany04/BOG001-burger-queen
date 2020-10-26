import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyA6Wk2x0N6SjHVjmheIFcKRHuwwLnXfjwE",
  authDomain: "burger-queen-react-3732b.firebaseapp.com",
  databaseURL: "https://burger-queen-react-3732b.firebaseio.com",
  projectId: "burger-queen-react-3732b",
  storageBucket: "burger-queen-react-3732b.appspot.com",
  messagingSenderId: "464585550874",
  appId: "1:464585550874:web:5f64e8b9922d05865535a3"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();