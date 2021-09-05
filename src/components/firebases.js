import firebase from "firebase/app";
import "firebase/auth";



export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBGcc_YH4j8AJxkIPejWjT85oUidMc8mq8",
    authDomain: "messenger-f4caa.firebaseapp.com",
    projectId: "messenger-f4caa",
    storageBucket: "messenger-f4caa.appspot.com",
    messagingSenderId: "66243983360",
    appId: "1:66243983360:web:8ec6d9a27b1795298b80e5",
    measurementId: "G-ZTCV2E5570"
  }).auth();
  export default !firebase.apps.length ? firebase.initializeApp(auth) : firebase.app();