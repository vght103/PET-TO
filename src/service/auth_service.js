import firebaseApp from "./firebase";
import firebase from "firebase";

class AuthService {
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();

    // return 해야되네?
    // promise 가 리턴된다
    return firebaseApp.auth().signInWithPopup(provider);
  }
}

export default AuthService;
