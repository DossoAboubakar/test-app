// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { AngularFireModule } from '@angular/fire/compat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCArsQUCHpKoLNtD4b_uHfQnhmiUjGzerM",
  authDomain: "test-app-572b2.firebaseapp.com",
  projectId: "test-app-572b2",
  storageBucket: "test-app-572b2.appspot.com",
  messagingSenderId: "350779174164",
  appId: "1:350779174164:web:59c6d2ca94651fa3d1e601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);