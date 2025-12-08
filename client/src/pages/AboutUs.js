import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-20 bg-white min-h-[calc(100vh-84px)] overflow-x-hidden">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-6 py-3 animate-fadeIn">
        About This Blog
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-gray-700 text-lg sm:text-xl mb-4 animate-fadeIn delay-200">
        Welcome! This blog shares tutorials, practical guides, and tips on
        modern web development, with a focus on the MERN stack.
      </p>

      <p className="max-w-2xl text-gray-700 text-lg sm:text-xl mb-8 animate-fadeIn delay-400">
        Our goal is to provide clear, actionable insights, real-world examples,
        and coding strategies to help developers at every level improve their
        skills and build amazing projects.
      </p>

      {/* Call-to-Action Button */}
      <div className="flex justify-center animate-fadeIn delay-600">
        <a
          href="/articles-list"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
        >
          Explore Articles
        </a>
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

export default AboutUs;
