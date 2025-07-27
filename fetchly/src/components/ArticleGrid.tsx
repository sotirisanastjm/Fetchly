'use client';

import { useArticles } from '@/context/ArticleContext';
import Link from 'next/link';
import ArticleLoader from './ArticleLoader';
import ArticleCard from './ArticleCard';

export default function ArticleGrid() {
    const { articles, tags, loading, activeTag, fetchArticlesByTag } = useArticles();

    return (
        <section className='container mx-auto px-4 lg:px-0'>
            <h2 className='text-xl lg:text-4xl mb-4 font-bold'>Latest Tech News</h2>
            <div className='mb-8 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <button
                        key={tag}
                        className={` ${tag == activeTag && 'bg-slate-dark'} ${tag != activeTag && 'hover:bg-slate-500 hover:cursor-pointer hover:scale-[1.02] transition-all duration-200'} px-4 py-2 text-sm font-bold uppercase rounded-3xl bg-slate-700 text-white transition`}
                        onClick={() => tag != activeTag ? fetchArticlesByTag(tag) : null}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 gap-8'>
                {!loading && articles.map((article, index) => {
                    return (
                        <ArticleCard key={index} article={article} />
                    );
                })}

                {loading && (
                    <>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <ArticleLoader key={index} />
                        ))}
                    </>
                )}

            </div>

        </section>
    );
}
