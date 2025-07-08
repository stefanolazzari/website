// Configurazione Firebase per l'app Vite
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfGptPTxREaqsXBcncin93diSPVHnHbb0",
  authDomain: "website-37cea.firebaseapp.com",
  projectId: "website-37cea",
  storageBucket: "website-37cea.firebasestorage.app",
  messagingSenderId: "453617330986",
  appId: "1:453617330986:web:8b9d26c13a5a5e3d494c53",
  measurementId: "G-153B0NSQXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app, analytics };
