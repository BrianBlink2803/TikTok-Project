
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAul0YFp2qFZOUIWDTy0MbyqodiIZZqtyY",
  authDomain: "blink-1a266.firebaseapp.com",
  projectId: "blink-1a266",
  storageBucket: "blink-1a266.appspot.com",
  messagingSenderId: "109410597085",
  appId: "1:109410597085:web:a55aa31593d51631688334"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;