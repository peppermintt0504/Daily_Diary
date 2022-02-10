import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBrDdmrwiMWNUFrHg0CKtK3JmaOvF0EP7Q",
    authDomain: "peppermint-8fb1f.firebaseapp.com",
    projectId: "peppermint-8fb1f",
    storageBucket: "peppermint-8fb1f.appspot.com",
    messagingSenderId: "122223278746",
    appId: "1:122223278746:web:983bf9b2bc6da0f23cfd23",
    measurementId: "G-FJQ1VX85Z0"
};


const fire_app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage(fire_app);
const realtime = getDatabase(fire_app);

export const apiKey = firebaseConfig.apiKey;
export { realtime,storage, auth ,db };