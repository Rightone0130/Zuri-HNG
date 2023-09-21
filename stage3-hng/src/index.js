import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth"

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";



const firebaseConfig = {
    apiKey: "AIzaSyDLCDUjKOVJmf4k7byWAAhcyscqBkcWeU8",
    authDomain: "stage2-hng.firebaseapp.com",
    projectId: "stage2-hng",
    storageBucket: "stage2-hng.appspot.com",
    messagingSenderId: "948079415424",
    appId: "1:948079415424:web:32606014f7fa419871d665",
    measurementId: "G-WN73GT5GB4"
  };
  
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  const auth = getAuth(app)
  
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log('logged in!')
    } else{
        console.log('No User')
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DndProvider backend={HTML5Backend}>
            <App />
            </DndProvider>,
);


  
export {auth}

