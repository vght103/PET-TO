import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEYS,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const storageService = firebase.storage();
export const firestoreService = firebase.firestore();
export const firebaseAuth = firebaseApp.auth();
// export default firebaseApp;
