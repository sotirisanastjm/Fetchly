'use client';

import Link from "next/link";

export default function Breadcrumb({ text }: { text: string }) {

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className='mx-auto flex lg:w-[80%] flex-row gap-4 justify-between border-b pb-1 border-gray-500 mb-24 lg:mb-32'>
            <Link href="/" className="hover:scale-[1.05] menu-item transition-all duration-200 text-xl font-bold">Home</Link>
            <button onClick={handleCopy} className="hover:cursor-pointer ">
                <svg className="active:scale-125 w-[24px] h-[24px] hover:stroke-brown-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
            </button>
        </div>
    );
}