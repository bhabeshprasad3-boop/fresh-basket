import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyAk1TqCWJePpRVgM31TXiVNOVsTHxOXRcg",
  authDomain: "fir-login-456f3.firebaseapp.com",
  projectId: "fir-login-456f3",
  storageBucket: "fir-login-456f3.firebasestorage.app",
  messagingSenderId: "959898206908",
  appId: "1:959898206908:web:ad7968f692cbd7824f06b9",
  measurementId: "G-J699CHTHP0"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };