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
    onDelete: () => void;
}


export default function ReadLaterCard({ article, onDelete }: ArticleCardProps) {


    const toggleSave = (e: React.MouseEvent) => {
        e.preventDefault();
        storageService.deleteArticle(article.id);
        onDelete();
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
            <div className="hover:scale-[1.03] hover:shadow-xl shadow-black/50 duration-300 transition-all px-10 h-full py-8 min-h-[200px] bg-slate-dark rounded-3xl">
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
                    <div className='flex flex-row gap-4 mt-4 lg:mt-6 justify-between items-center'>
                        <div className="flex flex-row gap-4 items-center">
                            <img
                                className="rounded-full h-10 w-10 object-cover"
                                src={article.user.profile_image}
                                alt={`${article.user.name}'s profile`}
                            />
                            <div className="text-sm lg:text-lg font-bold">{article.user.name}</div>
                        </div>
                        <button className='hover:cursor-pointer bg-slate-navy hover:scale-[1.05] p-3 rounded-full transition-all duration-300 hover:bg-red-400/50' onClick={toggleSave} title={'Remove from saved'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div >
        </Link>
    );
}
