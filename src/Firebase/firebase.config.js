import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ2tozfWSkrPCfM9IeqK91XY0WdFJHkdA",
  authDomain: "pet-care-67132.firebaseapp.com",
  projectId: "pet-care-67132",
  storageBucket: "pet-care-67132.firebasestorage.app",
  messagingSenderId: "919250731806",
  appId: "1:919250731806:web:43c21c516d85e1ab833f0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
