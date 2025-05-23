import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Mason, Kayole",
    quote: "Since joining SafeFundi, I got help fast after an injury. The emergency loan saved my family!",
    img: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Peter Otieno",
    role: "Electrician, Rongai",
    quote: "I used to fear site accidents. Now I feel protected with instant hospital contacts and insurance.",
    img: "https://i.pravatar.cc/150?img=33"
  },
  {
    name: "Mercy Njeri",
    role: "Painter, Buruburu",
    quote: "SafeFundi helped me save and access a small loan. I even increased my work tools!",
    img: "https://i.pravatar.cc/150?img=45"
  }
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex flex-col items-center justify-center">
      <motion.div
        className="max-w-3xl bg-white rounded-xl shadow-lg p-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Welcome to SafeFundi</h1>
        <p className="text-gray-700 text-lg mb-6">
          Helping construction workers stay safe, connected, and financially empowered.
        </p>

        <ul className="text-left text-gray-600 mb-6 list-disc pl-6">
          <li>🛡️ Real-time AI injury alerts</li>
          <li>💰 Emergency loans & smart savings</li>
          <li>🏥 Nearby medical & insurance support</li>
        </ul>

        <div className="space-x-4 mb-6">
          <Link to="/login">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
              Create Account
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="mt-10 max-w-5xl grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
            <p className="italic text-gray-600 mb-2">"{t.quote}"</p>
            <h4 className="font-bold">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
