import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8IZ_Cm0wpIEqNH6j-Nmgcl4FNSaj6hY0",
  authDomain: "linkedin-clone-5bfea.firebaseapp.com",
  projectId: "linkedin-clone-5bfea",
  storageBucket: "linkedin-clone-5bfea.appspot.com",
  messagingSenderId: "70590960155",
  appId: "1:70590960155:web:87b48b0b36d3242ffa5ebe",
  measurementId: "G-GGWXBXKXVE",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage, signInWithPopup };
export default db;
