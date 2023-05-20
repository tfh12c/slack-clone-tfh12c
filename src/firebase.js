import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAe5yr-RBOBKVJITOxypxWaHXQgD9WSbE4",
  authDomain: "slack-clone-tfh12c.firebaseapp.com",
  projectId: "slack-clone-tfh12c",
  storageBucket: "slack-clone-tfh12c.appspot.com",
  messagingSenderId: "163141759056",
  appId: "1:163141759056:web:414ed14f16a10a89952155"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };