// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALgJ1Gsl5Af2P_wRVo1_yZIndAo0faw3Y",
  authDomain: "auth-moha-milon-484ef.firebaseapp.com",
  projectId: "auth-moha-milon-484ef",
  storageBucket: "auth-moha-milon-484ef.firebasestorage.app",
  messagingSenderId: "3757754291",
  appId: "1:3757754291:web:dbb447f6c57b015a302dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);