'use client';

import { useArticles } from '@/context/ArticleContext';
import Link from 'next/link';

export default function ArticleGrid() {
    const { articles, loading, error } = useArticles();

    return (
        <section className='container mx-auto px-4 lg:px-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 [grid-auto-rows:1fr]'>
                {articles.map((article, index) => {
                    return (
                        <div
                            key={article.id || index}
                            className={`card-item min-h-[200px] !w-full ${index == 0 || index == 3 || index == 4 ? 'lg:col-span-2' : ''}`}
                        >
                            <div className='text-xl lg:text-2xl font-bold'>{article.title}</div>
                            <div>{article.description}</div>
                            {/* <Link href={article.url}>Read More</Link> */}
                        </div>
                    );
                })}
            </div>

        </section>
    );
}
