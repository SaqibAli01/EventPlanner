import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

//-------------- User Login ha ya ni ha ---------
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
//----------------Logout-------------------------
import { signOut } from "firebase/auth";



//firestore
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDQPsYNSThlqkBniIRdRVC-XfQadn9UOmc",
    authDomain: "apihackthon-e5754.firebaseapp.com",
    projectId: "apihackthon-e5754",
    storageBucket: "apihackthon-e5754.appspot.com",
    messagingSenderId: "822453073112",
    appId: "1:822453073112:web:235d6febeefc42219d13ad",
    measurementId: "G-T93SZK07FJ"
};

// Initialize Firebase
export const useFirebase = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(useFirebase);
export const  auth = getAuth(useFirebase);
//google auth
export const googleProvider = new GoogleAuthProvider();