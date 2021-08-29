import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEYS,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const dbService = firebase.firestore();
export default firebaseApp;
