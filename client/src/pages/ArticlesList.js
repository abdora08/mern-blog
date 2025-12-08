import React from "react";
import articleContent from "./article-content";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  return (
    <div className="mb-20">
      <h1 className="text-2xl sm:text-4xl font-bold my-6 text-gray-900">
        Articles
      </h1>

      <div className="container py-6 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {articleContent.map((article, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm 
                         hover:shadow-lg transition-all duration-300"
            >
              <Link to={`/article/${article.name}`}>
                <img
                  className="h-48 w-full object-cover rounded-t-xl"
                  src={article.thumbnail}
                  alt={article.title}
                />
              </Link>

              <div className="p-6">
                <Link to={`/article/${article.name}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-indigo-600 transition">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {article.content[0]}
                </p>

                <Link
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition inline-flex items-center"
                  to={`/article/${article.name}`}
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
