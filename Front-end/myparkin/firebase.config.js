import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCs_ERaDGAkJzbAhpmC0OrRGlL7lMB36lI",
  authDomain: "green-e7c9f.firebaseapp.com",
  projectId: "green-e7c9f",
  storageBucket: "green-e7c9f.appspot.com",
  messagingSenderId: "202034484783",
  appId: "1:202034484783:web:fc65f82a5853d066bad8da",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export { firebase };
