'use client';

export default function ArticleLoader() {

    return (
        <div className="px-8 h-full py-6 min-h-[200px] bg-slate-800 rounded-2xl animate-pulse">
            <div className="flex flex-col h-full gap-4 justify-between">
                <div className="flex flex-row gap-2 justify-between">
                    <div className="flex flex-wrap gap-2">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="h-4 w-12 rounded bg-slate-600"></div>
                        ))}
                    </div>
                    <div className="h-4 w-16 rounded bg-slate-600"></div>
                </div>
                <div>
                    <div className="h-6 w-3/4 mb-2 rounded bg-slate-600"></div>
                    <div className="h-4 w-full mb-1 rounded bg-slate-600"></div>
                    <div className="h-4 w-5/6 rounded bg-slate-600"></div>
                </div>
                <div className="flex flex-row mt-4 lg:mt-6 gap-4 items-center">
                    <div className="h-10 w-10 rounded-full bg-slate-600"></div>
                    <div className="h-4 w-24 rounded bg-slate-600"></div>
                </div>
            </div>
        </div>
    );
}
