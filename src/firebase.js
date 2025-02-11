
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChZqxFhXs0KCrXwByfYvHz9f8t4kuzRcg",
  authDomain: "fitzz-a3647.firebaseapp.com",
  projectId: "fitzz-a3647",
  storageBucket: "fitzz-a3647.firebasestorage.app",
  messagingSenderId: "509113007096",
  appId: "1:509113007096:web:d2cde9c224f1230da1b40d",
  measurementId: "G-WSS38SJKR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
