// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaojChHNaxDOjHrSL6127dvYQyJYTMM7c",
  authDomain: "moviemingle-app.firebaseapp.com",
  projectId: "moviemingle-app",
  storageBucket: "moviemingle-app.appspot.com",
  messagingSenderId: "266540898821",
  appId: "1:266540898821:web:cd3a4f8817d4cebb331a6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();