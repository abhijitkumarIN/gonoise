// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW_90YvVdeeDsGTzXweiU0FfKdJ8hEQEY",
  authDomain: "gonoise-4797f.firebaseapp.com",
  projectId: "gonoise-4797f",
  storageBucket: "gonoise-4797f.appspot.com",
  messagingSenderId: "287864973480",
  appId: "1:287864973480:web:865f676a85948718337a9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}