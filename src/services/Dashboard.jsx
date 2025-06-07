import React, { useEffect, useState } from 'react';
import AfterNav from './AfterNav';
import { getAuth } from 'firebase/auth';
import MoodTracker from './MoodTracker'; 
// import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; 

const Dashboard = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserName(userDoc.data().name || "User");
          } else {
            setUserName(user.displayName || "User");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserName(user.displayName || "User");
        }
      }
    };
  
    fetchUserName();
  }, []);

  return (
    <div>
      <AfterNav />

      <section id="home" className="pt-5 gap-5 flex flex-col justify-center items-center px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">
          Welcome back, {userName}
        </h2>
      </section>

      {/* Mood Tracker Section */}
      <section className=" px-6 flex flex-col items-center">
        {/* <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-4">
          How's your mood today?
        </h3> */}
        <MoodTracker /> 
      </section>
    </div>
  );
};

export default Dashboard;
