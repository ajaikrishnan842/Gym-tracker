import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCYhicBe_rx8sFZVLUItMDQZSKauCqSQwQ",
  authDomain: "gym-tracker-6d283.firebaseapp.com",
  projectId: "gym-tracker-6d283",
  storageBucket: "gym-tracker-6d283.firebasestorage.app",
  messagingSenderId: "80401381162",
  appId: "1:80401381162:web:6f3a0ab72e13eb9a341053"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Today's date in IST (YYYY-MM-DD)
export function getTodayIST() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}
