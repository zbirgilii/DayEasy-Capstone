// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHJVHUyIDmllS9J3ctdtiDYDDPhYb7ahg",
  authDomain: "dayeasy-fresh.firebaseapp.com",
  projectId: "dayeasy-fresh",
  storageBucket: "dayeasy-fresh.appspot.com",
  messagingSenderId: "325201293658",
  appId: "1:325201293658:web:d9eb8f8bfb3807eca18363",
  measurementId: "G-05FL2PQLVQ"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}
// const db = app.firestore();
// const analytics = getAnalytics(app);
const auth = firebase.auth()


export { auth };
// const app = initializeApp(firebaseConfig);
