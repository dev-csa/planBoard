import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAmY-aMu_NZY6gwaj9-HG7x46E_p1anwNE",
  authDomain: "my-plan-board.firebaseapp.com",
  projectId: "my-plan-board",
  storageBucket: "my-plan-board.appspot.com",
  messagingSenderId: "274840039248",
  appId: "1:274840039248:web:1f547a28e035ad23cf8655",
  measurementId: "G-MF7YK1GTKF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;