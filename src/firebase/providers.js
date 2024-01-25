import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { firebaseAuth } from './config';

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, provider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // user info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const signUpWithEmailPassword = async (displayName, email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const { uid, photoURL } = result.user;

    await updateProfile(firebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      // user info
      uid,
      photoURL,
      displayName,
      email,
    };
  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const signInWithEmailPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const { uid, photoURL, displayName } = result.user;

    return {
      ok: true,
      // user info
      uid,
      photoURL,
      displayName,
      email,
    };
  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};
