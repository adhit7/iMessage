import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCAnE2cy3MyKjDCWzzYhBY9B6ZPorI2QG4',
  authDomain: 'imessage-5fe02.firebaseapp.com',
  projectId: 'imessage-5fe02',
  storageBucket: 'imessage-5fe02.appspot.com',
  messagingSenderId: '876905693012',
  appId: '1:876905693012:web:718044cf1d223fdc8012c1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
