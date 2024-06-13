// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx9ENGG152y6GYLVzMneq0AXNW9kxHa4Q",
  authDomain: "argent-project-35d61.firebaseapp.com",
  projectId: "argent-project-35d61",
  storageBucket: "argent-project-35d61.appspot.com",
  messagingSenderId: "4234097528",
  appId: "1:4234097528:web:b8061f140b12a992610e8d",
  measurementId: "G-E9T9SQBC5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app