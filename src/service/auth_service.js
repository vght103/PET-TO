import firebaseApp from "./firebase";
import firebase from "firebase";

class AuthService {
  // 로그인
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // promise 가 리턴된다
    return firebaseApp.auth().signInWithPopup(provider);
  }

  onAuthChanged(userChanged) {
    firebase.auth().onAuthStateChanged((user) => userChanged(user));
  }

  // 로그아웃
  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
