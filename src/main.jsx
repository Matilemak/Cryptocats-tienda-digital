import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuXHVSMNqYWVzGJx5BAvalkTDFDuwzcPE",
  authDomain: "cryptocat-tienda-digital.firebaseapp.com",
  projectId: "cryptocat-tienda-digital",
  storageBucket: "cryptocat-tienda-digital.appspot.com",
  messagingSenderId: "649287554275",
  appId: "1:649287554275:web:c8423a6aa448e25b8ce1d6"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
