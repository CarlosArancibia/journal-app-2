import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title={'Create account'}>
      <form className="text-[#BDBBB8] mt-6">
        <label htmlFor="email">Full name</label>
        <input
          className="w-full p-2 mb-4 mt-1 rounded-md bg-transparent border border-[#BDBBB844]"
          type="text"
          id="email"
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
        <input
          className="w-full p-2 mb-4 mt-1 rounded-md bg-transparent border border-[#BDBBB844]"
          type="email"
          autoComplete="off"
        />
        <label htmlFor="email">Password</label>
        <input
          className="w-full p-2 mb-4 mt-1 rounded-md bg-transparent border border-[#BDBBB844]"
          type="text"
        />
        <div className="flex flex-col md:flex-row gap-4">
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
