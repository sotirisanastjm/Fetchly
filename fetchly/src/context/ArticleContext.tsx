'use client';

import React, { createContext, useContext, useEffect, useState } from "react";

const ArticlesContext = createContext<ArticlesContextProps | undefined>(undefined);

export const ArticlesProvider: React.FC<{ children: React.ReactNode; initialArticles?: Article[], tag: string }> = ({
  children,
  initialArticles = [],
  tag,
}) => {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [loading, setLoading] = useState(initialArticles.length === 0);
  const [error, setError] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(tag);

  const tags = ['angular', 'nextjs', 'react', 'typescript', 'javaScript', 'tailwind', 'nodeJs', 'webdev'];

  const fetchArticlesByTag = async (tag: string) => {
    setLoading(true);
    setActiveTag(tag);
    try {
      const res = await fetch(`https://dev.to/api/articles?tag=${encodeURIComponent(tag.toLowerCase())}&per_page=6`);
      if (!res.ok) throw new Error("Failed to fetch articles");
      const data: Article[] = await res.json();
      setArticles(data);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ArticlesContext.Provider value={{ articles, loading, error, activeTag, tags, fetchArticlesByTag }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) throw new Error("useArticles must be used within an ArticlesProvider");
  return context;
};
