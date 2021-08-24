import firebaseApp from "firebase";

class AuthService {
  login() {
    const provider = new firebaseApp.auth.GoogleAuthProvider();
    console.log(provider);

    // return 해야되네?
    // promise 가 리턴된다
    // return firebaseApp.auth().signInWithPopup(provider);
  }
}

export default AuthService;
