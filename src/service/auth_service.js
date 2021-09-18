// import firebaseApp from "./firebase";
import firebase from "firebase/app";

class AuthService {
  // 로그인
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // promise 가 리턴된다
    // return firebaseApp.auth().signInWithPopup(provider);
    return firebase.auth().signInWithPopup(provider);
  }

  onAuthChanged(userChanged) {
    firebase.auth().onAuthStateChanged((user) => userChanged(user));
  }

  // 로그아웃
  logout() {
    firebase.auth().signOut();
  }

  // 현재 유저확인
}

export default AuthService;
