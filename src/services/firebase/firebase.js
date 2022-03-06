// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBHVelFaN2ZX7IkuHIHJbCC2TQ-wKDwUKw",

  authDomain: "primera-app-react.firebaseapp.com",

  projectId: "primera-app-react",

  storageBucket: "primera-app-react.appspot.com",

  messagingSenderId: "621158366380",

  appId: "1:621158366380:web:85d4408ac11e94eb38b309"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)