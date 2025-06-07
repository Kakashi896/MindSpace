import React, { useEffect, useState } from "react";
import { getAuth, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import AfterNav from "./AfterNav";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        navigate("/", { replace: true });
        return;
      }

      setUser(currentUser);
      setEmail(currentUser.email || "");
      setName(currentUser.displayName || "");
      setNewName(currentUser.displayName || "");

      // Fetch additional user data from Firestore
      const userDocRef = doc(db, "users", currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setAge(userData.age || "");
        setName(userData.name || currentUser.displayName || "");
        setNewName(userData.name || currentUser.displayName || "");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleUpdate = async () => {
    try {
      if (!user) return;

      await updateProfile(user, { displayName: newName });

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(
        userDocRef,
        {
          name: newName,
          age: age,
        },
        { merge: true }
      );

      setName(newName);
      setEditing(false);
    } catch (error) {
      alert("Error updating profile: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  if (!user) {
    // While auth state is loading or user is not logged in, you can return null or a loader
    return null;
  }

  return (
    <>
      <AfterNav />
      <div className="min-h-screen w-1/3 py-12 ml-125 px-4 sm:px-12 flex flex-col items-start justify-start">
        <h1 className="text-4xl font-bold text-green-800 mb-6">👤 Your Profile</h1>

        <div className="text-lg text-gray-700 w-full max-w-3xl space-y-8">
          <div>
            <label className="block text-gray-500 text-sm">Email</label>
            <p className="text-xl font-medium">{email}</p>
          </div>

          <div>
            <label className="block text-gray-500 text-sm">Name</label>
            {editing ? (
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              <p className="text-xl font-medium">{name || "Not Set"}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-500 text-sm">Age</label>
            {editing ? (
              <input
                type="number"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            ) : (
              <p className="text-xl font-medium">{age || "Not Set"}</p>
            )}
          </div>

          <div className="flex gap-4 pt-6">
            {editing ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="bg-gray-300 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Edit Profile
              </button>
            )}

            <button
              onClick={handleLogout}
              className="ml-auto bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
