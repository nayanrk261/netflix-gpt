// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9WcY41NZTwTsQZ81MZVZ2bcfGyGjoLwU",
  authDomain: "netflixgpt-69fa5.firebaseapp.com",
  projectId: "netflixgpt-69fa5",
  storageBucket: "netflixgpt-69fa5.firebasestorage.app",
  messagingSenderId: "106908439437",
  appId: "1:106908439437:web:95dd7a7b6d2a2b984823c4",
  measurementId: "G-775CDMNFXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);