import {
  signInWithEmailPassword,
  signInWithGoogle,
  signOutFirebase,
  signUpWithEmailPassword,
} from '../../firebase/providers';
import { clearState } from '../journal/journalSlice';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startSignInGoogle = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const user = await signInWithGoogle();
    if (!user.ok) return dispatch(logout(user.errorMessage));

    dispatch(login(user));
  };
};

export const startSignUpEmailPassword = ({ name, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const user = await signUpWithEmailPassword(name, email, password);
    if (!user.ok) return dispatch(logout(user.errorMessage));

    dispatch(login(user));
  };
};

export const startSignInEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const user = await signInWithEmailPassword(email, password);

    if (!user.ok) return dispatch(logout(user.errorMessage));

    dispatch(login(user));
  };
};

export const startSignOut = () => {
  return async (dispatch) => {
    await signOutFirebase();
    dispatch(logout());
    dispatch(clearState());
  };
};
