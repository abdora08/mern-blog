import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);

  if (!article) {
    return (
      <div className="mb-20 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold my-6 text-red-600">
          Article Not Found
        </h1>
        <p className="text-gray-700 text-base">
          The article you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-20">
      <h1 className="text-2xl sm:text-4xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>

      {article.content.map((paragraph, index) => (
        <p className="leading-relaxed text-lg mb-6 text-gray-800" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Article;
