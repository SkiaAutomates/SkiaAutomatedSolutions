import React from 'react';
import { Button } from './Button';
import { SplineClean } from './SplineClean';
import { Mail } from 'lucide-react';
import { UnderConstruction } from './UnderConstruction';

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">


          {/* Animated Gradient Background - Replaced by Spline Scene */}
          <SplineClean />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-xl opacity-20 pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:32px_32px] pointer-events-none"></div>

          {/* Glow Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-primary/40 transition-all duration-700"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none group-hover:bg-secondary/40 transition-all duration-700"></div>


          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 pointer-events-none">

            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Let's Get In Touch.
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Your business instruments should serve you, not the other way around.
                We're happy to help you build the system you've always wanted.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pointer-events-auto">
                <Button
                  className="bg-white text-primary hover:bg-gray-100 border-0 shadow-[0_0_20px_rgba(255,255,255,0.3)] font-bold"
                  size="lg"
                  onClick={() => window.open('https://calendly.com/villaruel-edgardjr/30min', '_blank')}
                >
                  Book a discovery call
                  <span className="ml-2 w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
                </Button>

                <UnderConstruction>
                  <Button
                    className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white opacity-70 cursor-not-allowed"
                    size="lg"
                    onClick={(e) => e.preventDefault()}
                  >
                    View Samples
                  </Button>
                </UnderConstruction>
              </div>
            </div>

            <div className="hidden lg:block flex-shrink-0">
              <a
                href="mailto:villaruel.edgardjr@gmail.com"
                className="w-32 h-32 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_0_40px_rgba(37,99,235,0.3)] animate-pulse hover:scale-105 transition-transform cursor-pointer hover:bg-white/10"
              >
                <Mail className="w-16 h-16 text-white" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};