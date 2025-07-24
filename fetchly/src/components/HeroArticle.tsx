'use client';

import { useArticles } from '@/context/ArticleContext';
import Link from 'next/link';

export default function HeroArticle() {
    const { articles, loading, error } = useArticles();

    return (
        <section className='container mx-auto mt-12 px-4 lg:px-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 [grid-auto-rows:1fr]'>
                <div
                    className={`hero-item hero min-h-[200px] !w-full col-span-2 row-span-2 lg:col-span-2 lg:row-span-3`}
                >
                    <div className='text-2xl lg:text-[64px] font-bold leading-tight'>
                        Discover <br /> Real-Time Tech Articles
                    </div>
                    <div className='mt-4 text-2xl lg:text-4xl max-w-[40ch]'>
                        Curated stories from developers, by developers — always fresh.
                    </div>

                </div>
                {articles.map((article, index) => {
                    return (
                        <div
                            key={article.id || index}
                            className={`hero-item min-h-[200px] !w-full space-y-2 ${index == 3 && 'lg:row-span-2'}`}
                        >
                            <div className='text-xl font-bold'>{article.title}</div>
                            <div className='text-lg'>{article.description}</div>
                            {/* <Link href={article.url}>Read More</Link> */}
                        </div>
                    );
                })}
            </div>

        </section>
    );
}
