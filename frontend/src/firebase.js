// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC_e_Pm-pMZGuXGiFqPqhyybRri7gzWJqA",
  authDomain: "fir-auth-c94fe.firebaseapp.com",
  projectId: "fir-auth-c94fe",
  storageBucket: "fir-auth-c94fe.appspot.com",
  messagingSenderId: "348619316159",
  appId: "1:348619316159:web:79aa84ce44b597aacd5f0a",
  measurementId: "G-52XY3L865Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export { app, auth };
