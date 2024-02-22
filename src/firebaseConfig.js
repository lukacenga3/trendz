// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCziqrZ--ECigoxZvYeXeImYegL-rOJHDU",
  authDomain: "trendz-cd415.firebaseapp.com",
  projectId: "trendz-cd415",
  storageBucket: "trendz-cd415.appspot.com",
  messagingSenderId: "246700609807",
  appId: "1:246700609807:web:06f181da118e8693b76e7a",
  measurementId: "G-DPQGYD2CPN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
