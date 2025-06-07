import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { auth } from '../../firebase';
import { db } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        try {
          // Save additional data (optional step)
          await setDoc(doc(db, 'users', user.uid), {
            name,
            age,
            email
          });
          console.log("Saved to Firestore for UID:", user.uid);
        } catch (error) {
          console.error("User created, but failed to save additional data:", error);
        }
  
        // After successful signup
        alert("Account created successfully! Please log in.");
        setIsLogin(true); // Switch to login form
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-white flex items-center justify-center px-4">
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.9, ease: 'easeOut' }}
    className="w-full max-w-2xl text-left space-y-8"
  >
    <div className="space-y-2">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {isLogin ? 'Welcome Back 👋' : 'Create your account'}
      </h1>
      <p className="text-base text-gray-500">
        {isLogin
          ? 'Log in to continue your Arogyam journey'
          : 'Let’s get you started with your mental well-being journey'}
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 mt-6 md:pr-16"
    >
      {!isLogin && (
        <>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b border-gray-300 focus:border-green-500 bg-transparent py-3 px-1 text-gray-800 text-lg placeholder-gray-400 focus:outline-none transition-all duration-300"
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value >= 0 ? e.target.value : 0)}
            className="w-full border-b border-gray-300 focus:border-green-500 bg-transparent py-3 px-1 text-gray-800 text-lg placeholder-gray-400 focus:outline-none transition-all duration-300"
            required
          />
        </>
      )}

      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border-b border-gray-300 focus:border-green-500 bg-transparent py-3 px-1 text-gray-800 text-lg placeholder-gray-400 focus:outline-none transition-all duration-300"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border-b border-gray-300 focus:border-green-500 bg-transparent py-3 px-1 text-gray-800 text-lg placeholder-gray-400 focus:outline-none transition-all duration-300"
        required
      />

      <button
        type="submit"
        className="w-fit px-8 py-3 mt-2 bg-green-600 text-white text-lg font-medium rounded-full hover:bg-green-700 transition duration-300 shadow-md"
      >
        {isLogin ? 'Log In' : 'Sign Up'}
      </button>
    </form>

    <p className="text-sm text-gray-600 mt-6">
      {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
      <button
        type="button"
        onClick={() => setIsLogin(!isLogin)}
        className="text-green-600 font-medium hover:underline"
      >
        {isLogin ? 'Sign up' : 'Log in'}
      </button>
    </p>
  </motion.div>
</div>

  );
};

export default AuthForm;
