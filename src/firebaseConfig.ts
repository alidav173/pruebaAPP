import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const config = 
{

    apiKey: "AIzaSyAtN0Ji02lfeO3L0k5ALORhtMXbSOrfX2c",

    authDomain: "appprueba-8d368.firebaseapp.com",
  
    projectId: "appprueba-8d368",
  
    storageBucket: "appprueba-8d368.appspot.com",
  
    messagingSenderId: "1013777373040",
  
    appId: "1:1013777373040:web:640379c160b9b8935ce1b5",
  
    measurementId: "G-7WKQ6DTQP0"
  
}

const app = initializeApp(config);
const analytics = getAnalytics(app);

export async function loginUser(email: string, password: string)
{
  try
  {
    const auth = getAuth();
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    return true;

  }catch(error)
  {
    console.log(error);
    return false;
  }


}

export async function registerUser(email: string, password: string)
{
  try
  {
    const auth = getAuth();
    const res = await createUserWithEmailAndPassword(auth, email, password)
    return true;

  }catch(error)
  {
    return false;
  }


}
