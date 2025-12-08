import React from "react";
import articleContent from "./article-content";
import Articles from "../components/Articles";

const ArticlesList = () => {
  return (
    <div className="mt-10 mb-20">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
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
