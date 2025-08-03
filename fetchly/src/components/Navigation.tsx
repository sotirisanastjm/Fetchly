import Link from "next/link";


export default function Navigation() {

    return (
        <nav className="border-b-2 mb-10 border-gray-400">
            <div className="container mx-auto px-4 2xl:px-0 py-4 w-full flex flex-row gap-5 justify-between items-center">
                <Link href="/" className="text-2xl lg:text-4xl font-bold text-shadow-glow"><h1>Fetchly</h1></Link>
                <Link href="/saved" className="hover:scale-[1.05] menu-item transition-all duration-200 text-xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 lg:size-10 hover:!stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </Link>

            </div>

        </nav>
    );
}
