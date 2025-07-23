'use client';

import React, { createContext, useContext, useEffect, useState } from "react";

type Article = {
    id: number;
    title: string;
    description: string;
    url: string;
    tag_list: string[];
    published_at: string;
    user: {
        name: string;
        profile_image: string;
    };
};

interface ArticlesContextProps {
    articles: Article[];
    loading: boolean;
    error: string | null;
}

const ArticlesContext = createContext<ArticlesContextProps | undefined>(undefined);

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch("https://dev.to/api/articles?per_page=10");
                if (!res.ok) throw new Error("Failed to fetch articles");
                const data = await res.json();
                setArticles(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <ArticlesContext.Provider value={{ articles, loading, error }}>
            {children}
        </ArticlesContext.Provider>
    );
};

export const useArticles = () => {
    const context = useContext(ArticlesContext);
    if (!context) throw new Error("useArticles must be used within an ArticlesProvider");
    return context;
};
