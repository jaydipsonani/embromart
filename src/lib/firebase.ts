// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCJmV35TQ7YYJIeoMG9F8sHiDeLOgwZ9w",
    authDomain: "embromart.firebaseapp.com",
    projectId: "embromart",
    storageBucket: "embromart.firebasestorage.app",
    messagingSenderId: "499405425557",
    appId: "1:499405425557:web:e034997cd0e89d1f14c49c",
    measurementId: "G-7GVFY2PPTF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Analytics conditionally (only client-side)
let analytics: any = null;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { auth, googleProvider, analytics, logEvent };
