import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComments = async (e) => {
    e.preventDefault();
    const result = await fetch(`/api/articles/${articleName}/add-comments`, {
      method: "POST",
      body: JSON.stringify({ username, text: commentText }),
      headers: { "Content-Type": "application/json" },
    });

    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <form
      onSubmit={addComments}
      className="bg-white shadow-md rounded-xl p-8 border border-gray-100 mt-12"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Add a Comment</h3>

      <label className="block text-gray-700 text-sm font-semibold mb-2">
        Your Name
      </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        className="w-full border border-gray-300 rounded-lg py-2.5 px-3 mb-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />

      <label className="block text-gray-700 text-sm font-semibold mb-2">
        Your Comment
      </label>
      <textarea
        rows="4"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write your comment..."
        className="w-full border border-gray-300 rounded-lg py-2.5 px-3 mb-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />

      <button
        type="submit"
        disabled={!username || !commentText}
        className={`w-full py-3 rounded-lg text-white font-semibold transition transform 
          ${
            !username || !commentText
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-1 shadow-md"
          }`}
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
