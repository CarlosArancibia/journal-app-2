import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4AtkQdpNdbYlGq9LdrIDHm7Ts66JAnEo',
  authDomain: 'journal-7d3ab.firebaseapp.com',
  projectId: 'journal-7d3ab',
  storageBucket: 'journal-7d3ab.appspot.com',
  messagingSenderId: '731584061765',
  appId: '1:731584061765:web:eed1ebcadcaf39a0b51e2c',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
