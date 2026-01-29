     
//  This is a sever component by default
import LoginForm from "../_components/LoginForm";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-20">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Login
      </h1>
      <LoginForm />
      <p className="mt-4 text-center">Do not have an account? <Link href='/register' className='text-blue-600 hover:underline'>Register</Link></p>
    </div>
  );
};

export default LoginPage;
