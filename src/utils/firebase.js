// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeusqF2L-4msVeeXDxsutIX4IhlrUxGdM",
  authDomain: "netflixgpt-c2496.firebaseapp.com",
  projectId: "netflixgpt-c2496",
  storageBucket: "netflixgpt-c2496.firebasestorage.app",
  messagingSenderId: "115689847506",
  appId: "1:115689847506:web:8a40db93f1631f81d6cb0b",
  measurementId: "G-7W9Z7509WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();