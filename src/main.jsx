import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh9B4Ggq-IbMVMh1eUaUMWoEiixDvK3UU",
  authDomain: "matetalense.firebaseapp.com",
  projectId: "matetalense",
  storageBucket: "matetalense.appspot.com",
  messagingSenderId: "843889629935",
  appId: "1:843889629935:web:6652f22313349f99df591a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
