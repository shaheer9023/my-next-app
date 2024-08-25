import React from 'react';  
import './globals.css'; // Global styles  
import Link from 'next/link';  

export const metadata = {  
    title: 'My Next.js App',  
    description: 'A simple Next.js application with a global layout.',  
};  

const Layout = ({ children }: { children: React.ReactNode }) => {  
    return (  
        <html lang="en">  
            <body className="flex flex-col min-h-screen">  
                <header className="bg-blue-600 text-white p-4">  
                    <nav className="flex justify-between">  
                        <Link href="/" className="text-lg">Home</Link>  
                        <div className="flex space-x-4">  
                            <Link href="/about">About</Link>  
                            <Link href="/services">Services</Link>  
                            <Link href="/contact">Contact</Link>  
                            <Link href="/blog">Blog</Link>  
                        </div>  
                    </nav>  
                </header>  
                <main className="flex-grow p-4">{children}</main>  
                <footer className="bg-blue-600 text-white p-4 text-center">  
                    © 2023 My Next.js App  
                </footer>  
            </body>  
        </html>  
    );  
};  

export default Layout;