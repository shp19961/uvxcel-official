import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEFdaLCAWF_X_6akh-1SjirHJoU8YaBek",
  authDomain: "uvxcel-authentication.firebaseapp.com",
  projectId: "uvxcel-authentication",
  storageBucket: "uvxcel-authentication.appspot.com",
  messagingSenderId: "785628767337",
  appId: "1:785628767337:web:27587ffd16a0f209f62ef8",
  measurementId: "G-XNXQ1D897H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
