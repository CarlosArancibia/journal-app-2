import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startSignInEmailPassword, startSignInGoogle } from '../../store/auth/thunks';

const formState = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formState);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSignIn = (e) => {
    e.preventDefault();
    dispatch(startSignInEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startSignInGoogle());
  };

  return (
    <AuthLayout title={'Login'}>
      <form onSubmit={onSignIn} className="text-[#BDBBB8] mt-6">
        <label htmlFor="email">Email</label>
        <input
          className="w-full p-2 mb-4 mt-1 rounded-md bg-transparent border border-[#BDBBB844]"
          type="email"
          id="email"
          name="email"
          value={email}
          autoComplete="off"
          onChange={onInputChange}
        />
        <label htmlFor="email">Password</label>
        <input
          className="w-full p-2 mb-4 mt-1 rounded-md bg-transparent border border-[#BDBBB844]"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <div
          className={`border rounded-lg border-red-300 p-3 mb-4 text-red-300 ${errorMessage ?? 'hidden'}`}
        >
          <span>⚠</span>
          <span className="ml-2 text-sm">{errorMessage}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            disabled={isAuthenticating}
            type="submit"
            className="p-2 bg-[#333] rounded-md border border-[#BDBBB811] w-full disabled:opacity-60"
          >
            Log In
          </button>
          <button
            disabled={isAuthenticating}
            type="button"
            className="p-2 bg-[#333] rounded-md border border-[#BDBBB811] w-full disabled:opacity-60"
            onClick={onGoogleSignIn}
          >
            Google
          </button>
        </div>
        <div className="mt-5 flex justify-end">
          <Link className="text-sm underline text-white" to={'../register'}>
            Create a new account
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
