import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-text font-sans antialiased selection:bg-primary selection:text-white flex flex-col relative overflow-x-hidden">
            {/* Global Background Glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[128px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-cta/10 rounded-full blur-[128px] animate-blob animation-delay-4000"></div>
            </div>
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};
