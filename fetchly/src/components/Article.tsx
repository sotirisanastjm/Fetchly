import Link from "next/link";

export default function Article({ text, url }: { text: string, url: string }) {
    return (
        <article>
            <div className="mx-auto w-fit my-12 text-3xl flex flex-col gap-2 text-center font-bold">
                Prefer reading on the original site?{' '}
                
                <Link href={url} target="_blank" rel="noopener noreferrer" className="mt-4 text-2xl w-fit mx-auto inline-block bg-slate-navy hover:bg-slate-navy/50 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                    View on Dev.to
                </Link>
            </div>
            <div
                className="article"
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </article>
    );
};

