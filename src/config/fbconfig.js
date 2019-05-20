import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let config = process.env.FIREBASE;

firebase.initializeApp(config);
firebase.firestore().settings({timestampsinSnapshots: true})

export default firebase;
