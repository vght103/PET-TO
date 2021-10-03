// import firebaseApp from "./firebase";
import firebase from "firebase/app";

class AuthService {
  // 로그인
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider);
  }

  onAuthChanged(userChanged) {
    firebase.auth().onAuthStateChanged((user) => userChanged(user));
  }

  testLogin() {
    firebase.auth().signInAnonymously();
  }

  // 로그아웃
  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
