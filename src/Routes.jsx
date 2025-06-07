import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/JSX/LandingPage';
import Profile from "./services/Profile"

import Dashboard from '../src/services/Dashboard';
import AuthForm from './components/CTA pages/Authform';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 

 
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login-signup" element={<AuthForm/>}/>
        <Route path="profile" element={<Profile/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
