import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title={'Login'}>
      <form className="text-[#BDBBB8] mt-6">
        <label htmlFor="email">Email</label>
        <input
          className="w-full p-2 mb-4 mt-1 rounded-md bg-transparent border border-[#BDBBB844]"
          type="email"
          id="email"
          autoComplete="off"
        />
        <label htmlFor="email">Password</label>
        <input
          className="w-full p-2 mb-4 mt-1 rounded-md bg-transparent border border-[#BDBBB844]"
          type="password"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <button className="p-2 bg-[#333] rounded-md border border-[#BDBBB811] w-full">Log In</button>
          <button className="p-2 bg-[#333] rounded-md border border-[#BDBBB811] w-full">Google</button>
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
