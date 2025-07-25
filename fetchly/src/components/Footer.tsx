'use client';

export default function Footer() {

    return (
       <footer className="px-6 mt-14 py-4 bg-slate-dark">
        <div className="flex flex-row justify-center">
            <p className="font-bold">Copyright &copy; {new Date().getFullYear()} Fetchly </p>
        </div>
       </footer>
    );
}
