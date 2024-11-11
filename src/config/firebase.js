// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp5I90CDvhz82CGj2_PY1aNnO92z7mIhM",
  authDomain: "learn-firebase-7b4db.firebaseapp.com",
  projectId: "learn-firebase-7b4db",
  storageBucket: "learn-firebase-7b4db.firebasestorage.app",
  messagingSenderId: "608083638516",
  appId: "1:608083638516:web:5c04bd3bed8d0cf2adc6a1",
  measurementId: "G-X829PES1KS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
