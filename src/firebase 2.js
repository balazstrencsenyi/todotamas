import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3qimFVDkLCpLtnmCaifOX8f0TfFbtBho",
  authDomain: "todortamas1-1c90a.firebaseapp.com",
  projectId: "todortamas1-1c90a",
  storageBucket: "todortamas1-1c90a.appspot.com",
  messagingSenderId: "508770170497",
  appId: "1:508770170497:web:4bb890b4cd77d595d0bf80",
  measurementId: "G-7KL331QW3W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore }; // Export the 'auth' object along with others
