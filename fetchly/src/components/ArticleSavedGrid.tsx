'use client';

import { storageService } from '@/services/StorageService';
import React, { useEffect, useState } from 'react';
import ArticleLoader from './ArticleLoader';
import ReadLaterCard from './ReadLaterCard';
import Link from 'next/link';

export default function ArticleSavedGrid() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(articles.length === 0);

    useEffect(() => {
        setLoading(true);
        setArticles(storageService.getSavedArticles());
        setLoading(false)
    }, []);

    const handleDelete = () => {
        const updated = storageService.getSavedArticles();
        setArticles(updated);
    };

    const handleErase = () => {
        storageService.clearAllArticles();
        setArticles([]);
    };

    return (
        <section className='container mx-auto px-4 2xl:px-0'>
            <h2 className='text-3xl lg:text-4xl mb-4 font-bold'>Bookmarks</h2>

            <div className='grid grid-cols-1 gap-8'>
                {(!loading && articles.length > 0) && articles.map((article, index) => {
                    return (
                        <ReadLaterCard
                            key={index}
                            article={article}
                            onDelete={handleDelete}
                        />
                    );
                })}

                {loading && (
                    <>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <ArticleLoader key={index} />
                        ))}
                    </>
                )}

                {(!loading && articles.length > 0) &&
                    <button className='px-8 py-4 text-xl bg-slate-navy w-fit mx-auto rounded-xl font-bold my-8 hover:cursor-pointer hover:scale-[1.05] transition-all duration-300 hover:bg-red-400/50' onClick={handleErase} title={'Remove all artiles from saved'}>Delete all</button>
                }

                {(!loading && articles.length <= 0) &&
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-4 bg-slate-dark/30 rounded-2xl mt-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        <div className='space-y-1'>
                            <h3 className="text-2xl font-bold text-white">No articles saved yet</h3>
                            <p className="text-gray-400 max-w-md">
                                It looks like you haven’t saved any articles yet. You can explore the latest articles and save your favorites to view them here later.
                            </p>
                        </div>
                        <Link href="/" className="mt-4 inline-block bg-slate-navy hover:bg-slate-navy/50 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                            Explore Articles
                        </Link>
                    </div>

                }

            </div>

        </section>
    );
}
function getSavedArticles(): React.SetStateAction<Article[] | undefined> {
    throw new Error('Function not implemented.');
}

