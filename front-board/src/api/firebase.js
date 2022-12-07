// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function logout() {
  return signOut(auth)
    .then(
      () =>
        // Sign-out successful.
        null
    )
    .catch((error) => {
      // An error happened.
    });
}

export function onUserStateChange(callback) {
  // callback 함수를 받아옴
  onAuthStateChanged(auth, (user) => {
    // 전달받은 콜백함수 호출
    callback(user);
  });
}