import React from "react";

const CommentsList = ({ comments = [] }) => {
  return (
    <div className="mt-14">
      <h3 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">
        Comments
      </h3>

      {comments.length === 0 ? (
        <p className="text-gray-600 text-lg">
          No comments yet. Be the first to share your thoughts.
        </p>
      ) : (
        <div className="space-y-8">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {comment.username}
              </h4>

              <p className="text-gray-700 leading-relaxed">{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsList;
