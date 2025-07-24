'use client';

import Link from "next/link";


export default function Navigation() {

    return (
        <nav className="container mx-auto px-4 lg:px-0">

            <div className="py-4 px-8 bg-black-600 mt-[50px] w-full sm:w-[90%] lg:w-[80%] mx-auto rounded-4xl flex gap-6">
                <Link href="/" className="text-2xl lg:text-3xl font-bold text-shadow-glow"><h1>Fetchly</h1></Link>
                <div className="flex flex-row gap-12 justify-center items-center w-full">
                    <Link href="/" className="hover:scale-[1.05] menu-item transition-all duration-200 text-xl font-bold">Latest</Link>
                    <Link href="/" className="hover:scale-[1.05] menu-item transition-all duration-200 text-xl font-bold">Gallery</Link>
                    <Link href="/" className="hover:scale-[1.05] menu-item transition-all duration-200 text-xl font-bold">Random</Link>
                </div>
            </div>

        </nav>
    );
}
