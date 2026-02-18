import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { SplineBackground } from './SplineBackground';
import { ArrowRight, Terminal, Shield, Cpu, Activity, Zap } from 'lucide-react';
import { UnderConstruction } from './UnderConstruction';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <SplineBackground />

      {/* Background Grid & Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3332_1px,transparent_1px),linear-gradient(to_bottom,#3332_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        {/* Radial Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pointer-events-none">

        {/* Cyber Badge */}
        <div className={`inline-flex items-center px-4 py-1.5 mb-8 border border-primary/30 bg-primary/5 clip-corner-sm backdrop-blur-sm transition-all duration-700 pointer-events-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="flex h-2 w-2 mr-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-mono text-primary tracking-widest uppercase">Accepting new problems to solve.</span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-8 tracking-wider uppercase leading-none transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary text-glow">Automation</span><br />
          That <span className="text-primary text-glow">WORKS</span>
        </h1>

        {/* Subheading */}
        <p className={`text-lg md:text-xl text-text-dim mb-12 max-w-2xl mx-auto font-body leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          We build customized web apps that replace chaos with clarity. Scale your operations with intelligent workflows tailored to your unique business needs.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 transition-all duration-700 delay-300 pointer-events-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button
            variant="cta"
            size="lg"
            className="min-w-[220px]"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Automating
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <UnderConstruction>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[220px] opacity-70 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              <Terminal className="mr-2 w-5 h-5" />
              Documentation
            </Button>
          </UnderConstruction>
        </div>

        {/* Dashboard Preview - Cyber Panel */}
        <div className={`relative mx-auto max-w-5xl transition-all duration-700 delay-500 pointer-events-auto ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

          {/* Decorative Borders */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

          {/* Main Container */}
          <div className="bg-surface/80 backdrop-blur-xl border border-white/10 clip-corner overflow-hidden relative">

            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-text-dim/50 uppercase tracking-widest">
                  Secure Connection // TLS 1.3
                </div>
              </div>
              <div className="text-xs font-mono text-primary animate-pulse">Running...</div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 md:p-12 relative min-h-[400px] flex flex-col justify-center items-center">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">

                {/* Card 1 */}
                <div className="bg-black/40 border border-white/10 p-6 relative group hover:border-primary/50 transition-colors duration-300 clip-corner-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-sm font-mono text-text-dim">SYSTEM STATUS</div>
                    <Cpu className="text-primary/50 w-5 h-5" />
                  </div>
                  <div className="text-2xl font-mono text-white mb-1">1,240</div>
                  <div className="text-xs text-primary font-mono uppercase">ACTIVE WORKFLOWS</div>

                  {/* Connect Line */}
                  <div className="hidden md:block absolute top-1/2 -right-10 w-12 h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
                </div>

                {/* Card 2 */}
                <div className="bg-black/40 border border-white/10 p-6 relative group hover:border-secondary/50 transition-colors duration-300 clip-corner-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-sm font-mono text-text-dim">OPTIMIZATION</div>
                    <Zap className="text-secondary/50 w-5 h-5" />
                  </div>
                  <div className="text-2xl font-mono text-white mb-1">8,500+</div>
                  <div className="text-xs text-secondary font-mono uppercase">HOURS SAVED</div>
                </div>

              </div>

              {/* Central Processor Graphic */}
              <div className="mt-12 relative">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 animate-pulse-glow">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-primary/20 rounded-full animate-spin-slow" />
              </div>

              <div className="mt-6 text-center">
                <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-mono text-primary">
                  AUTOMATED SOLUTIONS
                </div>
              </div>

            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-10" />

          </div>
        </div>

      </div>
    </section>
  );
};