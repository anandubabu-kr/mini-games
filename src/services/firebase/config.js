// Import the functions you need from the SDKs you needs
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCt85zzvUsVRFOh3q-HAye2rhcHSfieMUs",
  authDomain: "papargames-fa1d0.firebaseapp.com",
  databaseURL:
    "https://papargames-fa1d0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "papargames-fa1d0",
  storageBucket: "papargames-fa1d0.appspot.com",
  messagingSenderId: "358989768200",
  appId: "1:358989768200:web:8de7bc0056c39934ad93bd",
  measurementId: "G-LDFC3FBK42",
};

// Initialize Firebase
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
