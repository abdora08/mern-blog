import React from "react";
import articleContent from "./article-content";
import Articles from "../components/Articles";

const ArticlesList = () => {
  return (
    <div className="mb-20">
      <h1 className="text-2xl sm:text-4xl font-bold my-6 text-gray-900">
        Articles
      </h1>

      <div className="container py-6 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <Articles articles={articleContent} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
