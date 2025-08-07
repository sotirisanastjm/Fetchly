import Article from '@/components/Article';
import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';


async function getArticle(id: string): Promise<ArticlePage | null> {
    try {
        const res = await fetch(`https://dev.to/api/articles/${id}`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
    const awaitedParams = await params;
    const id = awaitedParams.id;

    const article = await getArticle(id);

    if (!article) return <div>Article not found.</div>;

    const [start, end] = getRandomColorPair(approvedPalette);

    const gradient = `linear-gradient(135deg, ${start} 0%, ${end} 100%)`;


    return (
        <>
            <section className='container mx-auto lg:mt-12 px-4 2xl:px-0'>
                <div
                    className="rounded-3xl [box-shadow:inset_0_0_5rem_rgba(0,0,0,0.5),_0_0.5rem_1rem_rgba(0,0,0,0.5)] pt-14 min-h-[380px] lg:min-h-[500px] flex flex-col justify-end w-full"
                    style={{
                        background: gradient,
                    }}>

                    <div className="space-y-1 w-fit m-8 lg:m-14">
                        <h2 className='text-2xl lg:text-[48px] font-bold'>
                            {article.title}
                        </h2>
                    </div>
                </div>
            </section>

            <section className='container mx-auto lg:mt-12 px-4 2xl:px-0'>
                <Breadcrumb text={article.url} />
                <Article url={article.url} text={article.body_html} />
            </section>
        </>
    );
}

function getRandomColorPair(colors: string[]): [string, string] {
    const shuffled = [...colors].sort(() => 0.5 - Math.random());
    return [shuffled[0], shuffled[1]];
}

function hexToRgb(hex: string): string {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(x => x + x).join('');
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
}

const approvedPalette = [
    '#2e404f',
    '#293642',
    '#21364a',
    '#1b3c59',
    '#0b2c61',
];
