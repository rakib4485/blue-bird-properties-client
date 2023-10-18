// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKeWS5tg8d55c_QnnZ4QEBUh5hmcEcnmY",
  authDomain: "blue-bird-rent.firebaseapp.com",
  projectId: "blue-bird-rent",
  storageBucket: "blue-bird-rent.appspot.com",
  messagingSenderId: "407717820998",
  appId: "1:407717820998:web:fcfb2c6a1b3904f7f52847",
  measurementId: "G-HRF3XMHD89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;