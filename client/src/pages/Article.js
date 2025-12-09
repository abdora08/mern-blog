import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import Articles from "../components/Articles";
import NotFound from "./NotFound";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articlesInfo, setArticlesInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticlesInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) {
    return <NotFound />;
  }
  const otherArticles = articleContent.filter((a) => a.name !== name);

  return (
    <div className="mb-20 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl sm:text-5xl font-extrabold my-10 text-gray-900 tracking-tight">
        {article.title}
      </h1>

      <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <CommentsList comments={articlesInfo.comments} />

      <AddCommentForm articleName={name} setArticleInfo={setArticlesInfo} />

      {otherArticles.length > 0 && (
        <section className="mt-20 pt-10 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900">
            Other Articles
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            <Articles articles={otherArticles} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Article;
