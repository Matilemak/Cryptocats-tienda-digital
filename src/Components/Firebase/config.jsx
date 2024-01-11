// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuXHVSMNqYWVzGJx5BAvalkTDFDuwzcPE",
    authDomain: "cryptocat-tienda-digital.firebaseapp.com",
    projectId: "cryptocat-tienda-digital",
    storageBucket: "cryptocat-tienda-digital.appspot.com",
    messagingSenderId: "649287554275",
    appId: "1:649287554275:web:c8423a6aa448e25b8ce1d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };