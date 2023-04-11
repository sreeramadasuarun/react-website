import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDde_6eN05kl_YllZ8YRrEfencMRRMbuFk",
  authDomain: "navbar-firebase.firebaseapp.com",
  projectId: "navbar-firebase",
  storageBucket: "navbar-firebase.appspot.com",
  messagingSenderId: "1076554465857",
  appId: "1:1076554465857:web:68b43aaccb9ecb0fec7cc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
