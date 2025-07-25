'use client';

import Link from 'next/link';
import hero from '../assets/images/hero.jpg'

export default function HeroArticle() {

    return (
        <section className='container mx-auto lg:mt-12 px-4 lg:px-0'>
            <div className={`bg-black overflow-hidden relative px-8 lg:px-14 py-12 lg:py-18 rounded-2xl flex flex-col justify-end min-h-[350px] lg:min-h-[600px]`}>
                <img className='absolute h-full w-full z-0 inset-0' src={hero.src} alt="Image with green-blue effect" />
                <div className='absolute h-full w-full z-0 inset-0 bg-gray-800/20 backdrop-blur-xs' />
                <div className='space-y-2 absolute'>
                    <div className='text-2xl lg:text-[48px] font-bold'>
                        Discover Real-Time Tech Articles
                    </div>
                    <div className='text-xl lg:text-4xl'>
                        Curated stories from developers, by developers always fresh.
                    </div>
                </div>
            </div>
        </section>
    );
}
