import React from 'react';
import { Button } from './Button';
import { ArrowRight, Mail } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-skia-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-skia-primary to-[#4a5568] shadow-2xl">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="max-w-2xl">
              <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 leading-tight">
                Let's Get In Touch.
              </h2>
              <p className="text-lg md:text-[20px] text-white/90 mb-8 leading-relaxed">
                Your business instruments should serve you, not the other way around. 
                We're happy to help you build the system you've always wanted.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-skia-bg text-white hover:bg-black border border-transparent"
                >
                  Book a discovery call
                  <span className="ml-2 w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-skia-primary"
                >
                  Test Your Samples
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
               {/* Abstract visual for connection */}
               <div className="w-64 h-64 relative">
                  <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 border-4 border-white/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mail className="w-16 h-16 text-white" />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};