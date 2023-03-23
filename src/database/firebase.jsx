import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSwztnC3w9zCAGPftM13prB-JRH6rRRY8",
  authDomain: "asgchat-bbf42.firebaseapp.com",
  projectId: "asgchat-bbf42",
  storageBucket: "asgchat-bbf42.appspot.com",
  messagingSenderId: "748636374660",
  appId: "1:748636374660:web:705de9f89d40ca585da4d1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);