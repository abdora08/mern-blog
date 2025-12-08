import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-20 bg-white min-h-[calc(100vh-84px)] overflow-x-hidden">
      {/* Hero Heading */}
      <h1 className="whitespace-nowrap text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 mb-6 py-3 animate-fadeIn">
        Welcome to My Blog
      </h1>

      {/* Subheading */}
      <p className="max-w-2xl text-gray-600 text-lg sm:text-xl mb-4 animate-fadeIn delay-200">
        Explore tutorials, tips, and practical guides to sharpen your web
        development skills.
      </p>

      <p className="max-w-2xl text-gray-600 text-lg sm:text-xl mb-8 animate-fadeIn delay-400">
        Learn from real-world examples, coding insights, and hands-on projects
        to boost your knowledge.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 animate-fadeIn delay-600">
        <Link
          to="/articles-list"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
        >
          View Articles
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition transform hover:-translate-y-1"
        >
          About Me
        </Link>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          .animate-fadeIn {
            opacity: 0;
            animation: fadeIn 1s forwards;
          }
          .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
          .animate-fadeIn.delay-400 { animation-delay: 0.4s; }
          .animate-fadeIn.delay-600 { animation-delay: 0.6s; }

          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
