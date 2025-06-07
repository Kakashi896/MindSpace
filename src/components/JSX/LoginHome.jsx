import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // stop page reload

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // redirect to dashboard after successful login
    } catch (error) {
      console.error(error.message);
      alert("Login Failed: " + error.message);
    }
  };

  return (
    <section id="">
      <div className="my-16 sm:my-20 h-auto min-h-[70vh] flex flex-col items-center justify-center px-4">
        
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-light text-gray-900">
            Get the Care You Need <br /> Let’s Create Your Account
          </h1>
          <p className="text-gray-800 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
            Please sign in to continue
          </p>
        </div>

        <div className="rounded-xl shadow-md p-6 sm:p-8 w-full max-w-4xl bg-white">
          <h2 className="text-lg sm:text-xl italic font-medium text-gray-800 mb-6">
            Sign in to your account:
          </h2>

          <form
            onSubmit={handleLogin}
            className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap"
          >
            {/* Email Input */}
            <div className="flex flex-col w-full md:w-[30%]">
              <label className="text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-black"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col w-full md:w-[30%]">
              <label className="text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="bg-white rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-black"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 w-full md:w-auto">
              <button
                type="submit"
                className="w-full md:w-auto bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-full transition-all"
              >
                Sign In →
              </button>
              <Link to="/login-signup">
                <button
                  type="button"
                  className="w-full md:w-auto bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-2 rounded-full transition-all"
                >
                  Create Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
