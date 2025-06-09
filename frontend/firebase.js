import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjlU2y3eAvEhVx2m5SgO5HRCoNlO6NLZE",
  authDomain: "linkedin-clone-435a7.firebaseapp.com",
  projectId: "linkedin-clone-435a7",
  storageBucket: "linkedin-clone-435a7.firebasestorage.app",
  messagingSenderId: "915330564897",
  appId: "1:915330564897:web:3ed764dae078233fc63460"
};

export const app = initializeApp(firebaseConfig);