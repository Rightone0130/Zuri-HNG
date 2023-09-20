// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// tODO add sDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnQXxgpNx-ByXpmXmuNT7IpInf76bjuKY",
  authDomain: "right-gallery.firebaseapp.com",
  projectId: "right-gallery",
  storageBucket: "right-gallery.appspot.com",
  messagingSenderId: "658310628744",
  appId: "1:658310628744:web:95cb5e3cfeec485824a63d",
  measurementId: "G-NFLGQJQ4JN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)


export {auth}