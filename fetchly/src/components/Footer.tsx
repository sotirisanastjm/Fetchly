'use client';

export default function Footer() {

    return (
       <footer className="px-6 py-4 bg-gray-400">
        <div className="flex flex-row justify-center">
            <p className="font-bold">Copyright &copy; {new Date().getFullYear()} Fetchly </p>
        </div>
       </footer>
    );
}
