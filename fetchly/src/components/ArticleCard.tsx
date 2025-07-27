'use client';

import Link from 'next/link';
import React from 'react';

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

interface ArticleCardProps {
    article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    const formatDate = (dateString: string | Date) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <Link href={article.url}>
            <div className="hover:scale-[1.03] hover:shadow-xl shadow-gray-600 duration-300 transition-all px-8 h-full py-6 min-h-[200px] bg-slate-dark rounded-2xl">
                <div className="flex flex-col h-full gap-4 justify-between">
                    <div className="flex flex-row gap-2 justify-between">
                        <div className="flex flex-wrap gap-2">
                            {article.tag_list.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs text-gray-blue-100 lg:text-sm font-bold uppercase"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="text-xs lg:text-sm font-bold">
                            {formatDate(article.published_at)}
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">{article.title}</div>
                        <div className="text-md">{article.description}</div>
                    </div>
                    <div className="flex flex-row mt-4 lg:mt-6 gap-4 items-center">
                        <img
                            className="rounded-full h-10 w-10 object-cover"
                            src={article.user.profile_image}
                            alt={`${article.user.name}'s profile`}
                        />
                        <div className="font-bold">{article.user.name}</div>
                    </div>
                </div>
            </div >
        </Link>
    );
}
