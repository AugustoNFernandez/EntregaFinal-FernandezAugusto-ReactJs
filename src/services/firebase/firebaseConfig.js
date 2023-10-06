// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn3qdkqVYxGkh-wtU2HlL9OmKks-IB3K8",
  authDomain: "nuevopre3-e2454.firebaseapp.com",
  projectId: "nuevopre3-e2454",
  storageBucket: "nuevopre3-e2454.appspot.com",
  messagingSenderId: "386467627699",
  appId: "1:386467627699:web:451a97d7a12aadf4e666c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)