'use client';

import React, { createContext, useContext, useEffect, useState } from "react";

type Article = {
    id: number;
    title: string;
    description: string;
    url: string;
    tag_list: string[];
    published_at: Date;
    user: {
        name: string;
        profile_image: string;
    };
};

interface ArticlesContextProps {
    articles: Article[];
    loading: boolean;
    error: string | null;
    activeTag: string | null;
    tags: string[];
    fetchArticlesByTag: (tag: string) => void;
}

const ArticlesContext = createContext<ArticlesContextProps | undefined>(undefined);

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const tags = ['Angular', 'Nextjs', 'React', 'Typescript', 'JavaScript', 'Tailwind', 'NodeJs', 'WebDev'];

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
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticlesByTag(tags[0]);
    }, []);


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
