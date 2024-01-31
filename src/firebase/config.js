import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvVariables } from '../journal/helpers/getEnvVariables';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEnvVariables().VITE_API_KEY_FB,
  authDomain: 'journalapp-92aa7.firebaseapp.com',
  projectId: 'journalapp-92aa7',
  storageBucket: 'journalapp-92aa7.appspot.com',
  messagingSenderId: '1038201402933',
  appId: '1:1038201402933:web:202d86c8f635ba1b71a37c',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
