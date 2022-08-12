import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAaxWZO4o8TdPpF-r-xrTzGSDOkFlvvkug",
  authDomain: "e-mart-imgs.firebaseapp.com",
  projectId: "e-mart-imgs",
  storageBucket: "e-mart-imgs.appspot.com",
  messagingSenderId: "897038941837",
  appId: "1:897038941837:web:b34ccecc113e01f46d2cc4",
  measurementId: "G-HL8H6D8HVQ"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);