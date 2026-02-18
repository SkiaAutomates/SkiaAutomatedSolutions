import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { UnderConstruction } from './UnderConstruction';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? 'bg-black/95 backdrop-blur-md shadow-lg border-primary/20'
        : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center gap-5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Icon Part */}
            <div className="h-20 w-auto">
              <img src="/assets/logo_icon_v4.png" alt="Skia Icon" className="h-full w-auto object-contain" />
            </div>
            {/* Text Part */}
            <div className="h-11 w-auto opacity-90 group-hover:opacity-100 transition-opacity">
              <img src="/assets/logo_text_v3.png" alt="Skia Text" className="h-full w-auto object-contain" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <UnderConstruction key={link.label}>
                <a
                  href={link.href}
                  className="text-text-dim hover:text-white hover:text-glow transition-all text-sm font-medium uppercase tracking-wider font-mono hover:border-b hover:border-primary cursor-not-allowed opacity-70"
                  onClick={(e) => e.preventDefault()}
                >
                  {link.label}
                </a>
              </UnderConstruction>
            ))}

            <div className="h-6 w-px bg-white/10 mx-2"></div>

            {/* <Button variant="cta" size="sm" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
              Launch App
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-none transition-colors border border-transparent hover:border-primary/50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-primary/20 p-0 shadow-2xl animate-scanline">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-dim hover:text-primary hover:bg-white/5 font-mono py-4 px-6 border-b border-white/5 transition-colors uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* <div className="p-6">
              <Button
                variant="cta"
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Launch App
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};
