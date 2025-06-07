// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeFgntFAsJ_L0FMvv0LOmZljQ0aW8t3lU",
  authDomain: "arogyam-mental-health.firebaseapp.com",
  projectId: "arogyam-mental-health",
  storageBucket: "arogyam-mental-health.firebasestorage.app",
  messagingSenderId: "37718435673",
  appId: "1:37718435673:web:28d84d4e96db7cf9070e48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);