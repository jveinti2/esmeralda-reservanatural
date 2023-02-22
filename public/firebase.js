// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJz3p4zkzkC3x_GZ3TImbuzFI6ITWyCX0",
  authDomain: "reserva-esmeralda.firebaseapp.com",
  projectId: "reserva-esmeralda",
  storageBucket: "reserva-esmeralda.appspot.com",
  messagingSenderId: "921715774392",
  appId: "1:921715774392:web:efd4188d6ebfc7ea3df54d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
