import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'carlos@google.com',
    password: '',
  });

  const onSignIn = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log('google');
    dispatch(startGoogleSignIn());
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
        <div className="flex flex-col md:flex-row gap-4">
          <button type="submit" className="p-2 bg-[#333] rounded-md border border-[#BDBBB811] w-full">
            Log In
          </button>
          <button
            type="button"
            className="p-2 bg-[#333] rounded-md border border-[#BDBBB811] w-full"
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
