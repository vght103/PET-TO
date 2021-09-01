import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEYS,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const storageService = firebase.storage();
export const dbService = firebase.firestore();
export default firebaseApp;
