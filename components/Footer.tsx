import React from 'react';
import { Cpu, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0F14] border-t border-skia-link/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="text-skia-primary" size={24} />
              <span className="text-xl font-bold text-white">
                Skia<span className="text-skia-primary">Automates</span>
              </span>
            </div>
            <p className="text-skia-text/60 text-sm leading-relaxed">
              Transforming chaos into structured automated systems. We build the software that builds your business.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-skia-text/60 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-skia-text/60 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-skia-text/60 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-skia-text/60 hover:text-white transition-colors text-sm">Web App Development</a></li>
              <li><a href="#" className="text-skia-text/60 hover:text-white transition-colors text-sm">Workflow Automation</a></li>
              <li><a href="#" className="text-skia-text/60 hover:text-white transition-colors text-sm">System Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-skia-text/60 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-skia-text/60 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-skia-text/60 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-skia-link/20 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-skia-text/40">
          <p>&copy; {new Date().getFullYear()} Skia Automated Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};