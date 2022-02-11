// import { initializeApp } from "firebase/app";
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_uzjHsvutIubtJcM5D4Fur0dobQLVVrI",
    authDomain: "login-e52e4.firebaseapp.com",
    projectId: "login-e52e4",
    storageBucket: "login-e52e4.appspot.com",
    messagingSenderId: "161981551908",
    appId: "1:161981551908:web:37114c95d83a1f07a4cfb1"
  };
  
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  export default fire;