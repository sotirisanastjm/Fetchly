'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { useArticles } from '@/context/ArticleContext';
import image from '../assets/images/default.jpg'
import Link from 'next/link';

export default function ArticleSlider() {
    const { articles, loading, error } = useArticles();

    return (
        <section className='container mx-auto px-4 lg:px-0'>
            <Swiper
                spaceBetween={32}
                slidesPerView={"auto"}
            >
                {articles.map((article, index) => {
                    return (
                        <SwiperSlide className='py-10 !w-fit'>
                            <div className='card-slider min-h-[200px] !w-fit'>
                                <div>{article.title}</div>
                                <div>{article.description}</div>
                                <Link href={article.url}>Read More</Link>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}
