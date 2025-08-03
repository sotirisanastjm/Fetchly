import { storageService } from '@/services/StorageService';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        setIsSaved(storageService.isArticleSaved(article.id));
    }, [article.id]);

    const toggleSave = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isSaved) {
            storageService.deleteArticle(article.id);
            setIsSaved(false);
        } else {
            storageService.saveArticle(article);
            setIsSaved(true);
        }
    };

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
            <div className="relative hover:scale-[1.03] hover:shadow-xl shadow-black/50 duration-300 transition-all px-10 h-full py-8 min-h-[200px] bg-slate-dark rounded-3xl">
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
                <button className='absolute hover:cursor-pointer right-[32px] top-[-16px]' onClick={toggleSave} title={isSaved ? 'Remove from saved' : 'Save article'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8fabcc" className={`size-10 hover:scale-[1.08] hover:opacity-[1] hover:stroke-2 uration-300 transition-all ${isSaved ? 'fill-[#8fabcc]' : 'fill-[#1c262e]'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </button>
            </div >
        </Link>
    );
}
