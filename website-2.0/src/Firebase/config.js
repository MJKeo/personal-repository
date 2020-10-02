// Your web app's Firebase configuration
import firebase from 'firebase';  
var firebaseConfig = {
    apiKey: "AIzaSyAIvXIb2D2krBRrb-mO8mj-0tAC-lueoBg",
    authDomain: "blog-2e2c8.firebaseapp.com",
    databaseURL: "https://blog-2e2c8.firebaseio.com",
    projectId: "blog-2e2c8",
    storageBucket: "",
    messagingSenderId: "761326378419",
    appId: "1:761326378419:web:1c263470209b34e339bfc6",
    measurementId: "G-XHPJ24DN8F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();