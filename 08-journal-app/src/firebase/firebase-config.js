import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVrQLIgnR4LFei1NYbE0dCo1ZZ8qyZr4Q",
  authDomain: "reac-app-cursos-54ac4.firebaseapp.com",
  projectId: "reac-app-cursos-54ac4",
  storageBucket: "reac-app-cursos-54ac4.appspot.com",
  messagingSenderId: "175299050941",
  appId: "1:175299050941:web:f4cb44c1aafa3b1c8d26d4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}