import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
//getting the app if not present then create it or else if it is present then don'tcreate a new app again. in simple prevent creating apalication again and again in our firebase project

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);


// database instance of the app
const db = getFirestore(app);

export { db };

// now the fire base is done we can use it anywhere in the project