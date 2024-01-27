import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startSignUpEmailPassword } from '../../store/auth/thunks';

const formValidations = {
  name: [(value) => value.length > 1, 'The name is required'],
  email: [(value) => /[a-zA-Z\d._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/g.test(value), 'The email is invalid'],
  password: [(value) => value.length > 5, 'The password must be longer than 5 characters'],
};

const checkedValues = {};
const formState = {
  name: '',
  email: '',
  password: '',
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);
  const {
    name,
    email,
    password,
    nameValid,
    emailValid,
    passwordValid,
    isFormValid,
    onInputChange,
    showValidations,
  } = useForm(formState, formValidations, checkedValues);

  const onSignUp = (e) => {
    e.preventDefault();
    if (!isFormValid) return showValidations();

    dispatch(startSignUpEmailPassword({ name, email, password }));
  };

  return (
    <AuthLayout title={'Create account'}>
      <form className="text-[#BDBBB8] mt-6 sm:w-[450px]" onSubmit={onSignUp}>
        <div>
          <label htmlFor="name">Full name</label>
          <input
            className={`w-full p-2 mt-1 rounded-md bg-transparent border ${
              nameValid ? 'border-red-300 outline-none' : 'border-[#BDBBB844]'
            }`}
            name="name"
            type="text"
            id="name"
            value={name}
            autoComplete="off"
            onChange={onInputChange}
          />

          {nameValid && <span className="text-sm block mt-1 text-red-300">{nameValid}</span>}
        </div>
        <div className="mt-4">
          <label htmlFor="email">Email</label>
          <input
            className={`w-full p-2 mt-1 rounded-md bg-transparent border ${
              emailValid ? 'border-red-300 outline-none' : 'border-[#BDBBB844]'
            }`}
            name="email"
            type="text"
            inputMode="email"
            value={email}
            onChange={onInputChange}
            autoComplete="off"
          />
          {emailValid && <span className="text-sm block mt-1 text-red-300">{emailValid}</span>}
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input
            className={`w-full p-2 mt-1 rounded-md bg-transparent border ${
              passwordValid ? 'border-red-300 outline-none' : 'border-[#BDBBB844]'
            }`}
            name="password"
            value={password}
            onChange={onInputChange}
            type="password"
          />
          {passwordValid && <span className="text-sm block mt-1 text-red-300">{passwordValid}</span>}
        </div>
        <div
          className={`border rounded-lg border-red-300 p-3 mt-4 text-red-300 ${errorMessage ?? 'hidden'}`}
        >
          <span>⚠</span>
          <span className="ml-2 text-sm">{errorMessage}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <button className="p-2 bg-[#333] rounded-md border border-[#BDBBB811] w-full">Sign up</button>
        </div>
        <div className="mt-5 flex justify-end text-sm">
          Alredy have an account?
          <Link className="ml-2 underline text-white" to={'../login'}>
            Log In
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
