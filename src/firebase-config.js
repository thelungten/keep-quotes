import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYP1yvsv8NZ9JKKtd4U_5nvVt-8gHu2s4",
  authDomain: "keep-quotes.firebaseapp.com",
  projectId: "keep-quotes",
  storageBucket: "keep-quotes.appspot.com",
  messagingSenderId: "830729125838",
  appId: "1:830729125838:web:4ca40389421d9b9d88359f",
  measurementId: "G-M1SD39EHLH",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
