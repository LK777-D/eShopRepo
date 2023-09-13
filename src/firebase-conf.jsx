import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxwRnsAW2nnXaQIVXOWXU_SsC9gvs4TbI",
  authDomain: "multimart-adf1a.firebaseapp.com",
  projectId: "multimart-adf1a",
  storageBucket: "multimart-adf1a.appspot.com",
  messagingSenderId: "884186799017",
  appId: "1:884186799017:web:bce5218bcc16ac6f72c2b8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
