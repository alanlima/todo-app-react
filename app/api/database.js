import firebase from 'firebase';

const projectId = process.env.FIREBASE_PROJECT_ID;
const apiKey = process.env.FIREBASE_API_KEY;
const messagingSenderId = process.env.FIRABASE_MESSASING_SENDER_ID;

const config = {
    apiKey,
    messagingSenderId,
    projectId,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    storageBucket: `${projectId}.appspot.com`,
};

const database = firebase.initializeApp(config).database();

module.exports = database;