// src/firebaseConfig.ts

// ✅ استيراد المكتبات الأساسية من Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// ✅ بيانات مشروعك من Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBhRK9RJ7013-Au1X8_h0d1tuNwX2EQBGA",
  authDomain: "test-ukf.firebaseapp.com",
  projectId: "test-ukf",
  storageBucket: "test-ukf.firebasestorage.app",
  messagingSenderId: "686139152557",
  appId: "1:686139152557:web:64e8a6eef2047cc2944e24",
  measurementId: "G-J62FGQV9C9"
};

// ✅ تهيئة Firebase
const app = initializeApp(firebaseConfig);

// ✅ تهيئة Firestore (لاستخدامه لتخزين النتائج ولوحة الترتيب)
export const db = getFirestore(app);

// ✅ تهيئة Analytics فقط إذا كان مدعومًا (لتجنب مشاكل SSR أو المتصفحات التي لا تدعمها)
let analytics: any = null;
isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
  }
});

export default app;
