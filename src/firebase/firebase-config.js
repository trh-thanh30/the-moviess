// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCx7nJUGr8GGkZRL9b4O81CUdDT6pdk_Vk",
  authDomain: "the-movies-68ad0.firebaseapp.com",
  projectId: "the-movies-68ad0",
  storageBucket: "the-movies-68ad0.appspot.com",
  messagingSenderId: "1068893053219",
  appId: "1:1068893053219:web:164b5f4467bb5cc1952c96",
  measurementId: "G-6TQG6Q9Z49",
};
const app = initializeApp(firebaseConfig);
// Init services
export const db = getFirestore();
export const auth = getAuth(app);
