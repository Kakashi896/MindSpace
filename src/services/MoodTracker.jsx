import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😰", label: "Anxious" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [description, setDescription] = useState("");
  const [history, setHistory] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const fetchMoodHistory = async () => {
      try {
        // Reference to user's moods collection
        const moodsRef = collection(db, "users", user.uid, "moods");
        const q = query(moodsRef, orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        const moodsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHistory(moodsData);
      } catch (error) {
        console.error("Failed to fetch mood history:", error);
      }
    };

    fetchMoodHistory();
  }, [user]);

  const handleMoodSubmit = async () => {
    if (!selectedMood) return alert("Please select a mood");
    if (!user) return alert("User not authenticated");

    const moodData = {
      mood: selectedMood,
      description: description.trim(),
      date: new Date().toISOString(),
    };

    try {
      const moodsRef = collection(db, "users", user.uid, "moods");
      await addDoc(moodsRef, moodData);

      // Update local state to show new mood immediately
      setHistory(prev => [moodData, ...prev]);

      setSelectedMood(null);
      setDescription("");
      alert("Mood recorded!");
    } catch (error) {
      alert("Failed to save mood: " + error.message);
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 sm:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mood Input Section */}
        <div className="bg-green-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            How are you feeling today?
          </h2>

          <div className="flex justify-start gap-4 flex-wrap mb-6">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                className={`text-3xl p-4 rounded-full transition-all border-2 ${
                  selectedMood === mood.label
                    ? "bg-green-100 border-green-500 scale-110"
                    : "border-gray-300 hover:border-green-300"
                }`}
                title={mood.label}
                aria-label={mood.label}
              >
                {mood.emoji}
              </button>
            ))}
          </div>

          <textarea
            placeholder="Add a short note (optional)..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-4 text-gray-800 mb-4 focus:outline-none focus:border-green-500"
            rows={4}
          />

          <button
            onClick={handleMoodSubmit}
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition duration-300 font-medium shadow"
          >
            Save Mood
          </button>
        </div>

        {/* Mood History Section */}
        <div className="p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Your Mood History
          </h2>
          <ul className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100">
            {history.length === 0 ? (
              <p className="text-gray-500">No mood data yet.</p>
            ) : (
              history.map((entry, index) => (
                <li
                  key={entry.id || index}
                  className="bg-green-50 p-4 rounded-lg border border-green-100 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-lg">{entry.mood}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(entry.date).toLocaleString()}
                    </span>
                  </div>
                  {entry.description && (
                    <p className="text-gray-700 text-sm mt-1">{entry.description}</p>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
