// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCMzxMjNu-2RIon544g8n6QDbGJKU3ng1U",
    authDomain: "blog-2fe88.firebaseapp.com",
    projectId: "blog-2fe88",
    storageBucket: "blog-2fe88.appspot.com",
    messagingSenderId: "728883914282",
    appId: "1:728883914282:web:0419c80a608c669ec80553",
    measurementId: "G-S0G8DF1THD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
