// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";



// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLCDUjKOVJmf4k7byWAAhcyscqBkcWeU8",
  authDomain: "stage2-hng.firebaseapp.com",
  projectId: "stage2-hng",
  storageBucket: "stage2-hng.appspot.com",
  messagingSenderId: "948079415424",
  appId: "1:948079415424:web:32606014f7fa419871d665",
  measurementId: "G-WN73GT5GB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
onAuthStateChanged(auth, user => {
  if(user != null){
      console.log('logged in!')
  } else{
      console.log('No User')
  }
})


  
export {auth}