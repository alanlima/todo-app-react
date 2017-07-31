import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDV3rAE2GEYrK1-zxnWUNY9iOfM8gu82_8",
    authDomain: "todo-react-bcc5d.firebaseapp.com",
    databaseURL: "https://todo-react-bcc5d.firebaseio.com",
    projectId: "todo-react-bcc5d",
    storageBucket: "todo-react-bcc5d.appspot.com",
    messagingSenderId: "538482364169"
};

 const database = firebase.initializeApp(config).database();

 module.exports = database;