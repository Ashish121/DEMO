import * as firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyC1C7nl-MU-N86eQ96AuPwBJBgqZq5uesc",
    authDomain: "demoproject-af39b.firebaseapp.com",
    databaseURL: "https://demoproject-af39b.firebaseio.com",
    projectId: "demoproject-af39b",
    storageBucket: "demoproject-af39b.appspot.com",
    messagingSenderId: "1026979044130",
    appId: "1:1026979044130:web:841c193886ac03c906e37b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log('Fireabse is initialize successfully');
  