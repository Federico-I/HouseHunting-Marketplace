import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgGrKVAwmXDHWIRwsXrzeMK9Sv_uucFnU",

  authDomain: "househunting-marketplace.firebaseapp.com",

  projectId: "househunting-marketplace",

  storageBucket: "househunting-marketplace.appspot.com",

  messagingSenderId: "885592191197",

  appId: "1:885592191197:web:f56b0badb0c1312cb36b34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
