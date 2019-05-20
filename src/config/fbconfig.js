import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0RN08BHJVTEKgs84VbNfQpMxDbzIVjHU",
    authDomain: "goal-buddy.firebaseapp.com",
    databaseURL: "https://goal-buddy.firebaseio.com",
    projectId: "goal-buddy",
    storageBucket: "goal-buddy.appspot.com",
    messagingSenderId: "1018260134107",
    appId: "1:1018260134107:web:f4399c2f3b1405ac"
  };



firebase.initializeApp(config);


export default firebase;
