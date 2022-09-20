import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmS-SewTkZCqOSesWRO2ggL_Dt8AWwJ9s",
  authDomain: "lyenx-website.firebaseapp.com",
  projectId: "lyenx-website",
  storageBucket: "lyenx-website.appspot.com",
  messagingSenderId: "216414493781",
  appId: "1:216414493781:web:453d4bbfa042ad9d02c8dc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
