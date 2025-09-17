import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyBhRK9RJ7013-Au1X8_h0d1tuNwX2EQBGA",
  authDomain: "test-ukf.firebaseapp.com",
  projectId: "test-ukf",
  storageBucket: "test-ukf.firebasestorage.app",
  messagingSenderId: "686139152557",
  appId: "1:686139152557:web:64e8a6eef2047cc2944e24",
  measurementId: "G-J62FGQV9C9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };