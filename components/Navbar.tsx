import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-skia-bg/90 backdrop-blur-md border-b border-skia-link/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-skia-primary to-skia-link rounded-lg flex items-center justify-center text-white">
              <Cpu size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Skia<span className="text-skia-primary">Automates</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-skia-text/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-skia-link/20 rounded-md"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-skia-bg border-b border-skia-link/20 p-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-skia-text/80 hover:text-white font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="primary" 
              fullWidth 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};