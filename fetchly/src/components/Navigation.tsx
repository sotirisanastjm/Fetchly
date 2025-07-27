import Link from "next/link";


export default function Navigation() {

    return (
        <nav className="border-b-2 mb-10 border-gray-400">
            <div className="container mx-auto px-4 lg:px-0 py-4 w-full">
                <Link href="/" className="text-2xl lg:text-4xl font-bold text-shadow-glow"><h1>Fetchly</h1></Link>
                <div className="flex flex-row gap-12 justify-center items-center w-full">
                    {/* <Link href="/" className="hover:scale-[1.05] menu-item transition-all duration-200 text-xl font-bold">Latest</Link>
                    <Link href="/" className="hover:scale-[1.05] menu-item transition-all duration-200 text-xl font-bold">Gallery</Link>
                    <Link href="/" className="hover:scale-[1.05] menu-item transition-all duration-200 text-xl font-bold">Random</Link> */}
                </div>
            </div>

        </nav>
    );
}
