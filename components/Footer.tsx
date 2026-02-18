import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { UnderConstruction } from './UnderConstruction';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 text-text-dim relative z-10 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-auto">
                <img src="/assets/logo_icon_v4.png" alt="SKIA" className="h-full w-auto object-contain" />
              </div>
              <div className="h-8 w-auto opacity-80">
                <img src="/assets/logo_text_v3.png" alt="AUTOMATED SOLUTIONS" className="h-full w-auto object-contain" />
              </div>
            </div>
            <p className="text-xs text-text-dim leading-relaxed uppercase tracking-wide">
              Transforming chaos into <br /> structured automated systems.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-3">
              <li>
                <UnderConstruction>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors text-xs uppercase tracking-wider opacity-70 cursor-not-allowed">About</a>
                </UnderConstruction>
              </li>
              <li>
                <UnderConstruction>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors text-xs uppercase tracking-wider opacity-70 cursor-not-allowed">Careers</a>
                </UnderConstruction>
              </li>
              <li>
                <UnderConstruction>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors text-xs uppercase tracking-wider opacity-70 cursor-not-allowed">Contact</a>
                </UnderConstruction>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors text-xs uppercase tracking-wider">Web Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-xs uppercase tracking-wider">Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-xs uppercase tracking-wider">Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex space-x-4">
              <UnderConstruction>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors opacity-70 cursor-not-allowed"><Twitter size={20} /></a>
              </UnderConstruction>
              <UnderConstruction>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors opacity-70 cursor-not-allowed"><Linkedin size={20} /></a>
              </UnderConstruction>
              <UnderConstruction>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors opacity-70 cursor-not-allowed"><Github size={20} /></a>
              </UnderConstruction>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-text-dim/50">
          <p>&copy; {new Date().getFullYear()} Skia Automated Solutions.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};