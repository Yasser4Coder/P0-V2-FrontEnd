// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA2gEViDSs2dEgi_sKIeCCZ3NByIi9ojco",
  authDomain: "project0-cb9fe.firebaseapp.com",
  projectId: "project0-cb9fe",
  storageBucket: "project0-cb9fe.firebasestorage.app",
  messagingSenderId: "78991133844",
  appId: "1:78991133844:web:c5432a62b457db4b783881",
  measurementId: "G-5Q05FSLB6Z",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
