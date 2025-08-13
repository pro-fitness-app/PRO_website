import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_hzl_72NhJZ7aolih4e5sI4v-BFkhqls",
  authDomain: "pro-website-1c990.firebaseapp.com",
  projectId: "pro-website-1c990",
  storageBucket: "pro-website-1c990.firebasestorage.app",
  messagingSenderId: "612010486465",
  appId: "1:612010486465:web:6f646438ca9ff2a9aa0240"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
