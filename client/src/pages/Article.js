import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import Articles from "../components/Articles";
import NotFound from "./NotFound";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articlesInfo, setArticlesInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticlesInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) {
    return <NotFound />;
  }
  const otherArticles = articleContent.filter((a) => a.name !== name);

  return (
    <div className="mb-20">
      <h1 className="text-2xl sm:text-4xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>

      <div className="space-y-6">
        {article.content.map((paragraph, index) => (
          <p className="text-gray-800 text-lg leading-relaxed" key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      {otherArticles.length > 0 && (
        <section className="mt-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
            Other Articles
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <Articles articles={otherArticles} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Article;
