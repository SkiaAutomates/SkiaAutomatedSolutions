import React from 'react';
import { Button } from './Button';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-skia-primary rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-skia-link/40 border border-skia-primary/30 mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          <span className="text-sm font-medium text-skia-text/90">Accepting new enterprise clients</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[44px] leading-[1.1] md:text-6xl md:leading-tight font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto">
          The platform that makes <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-skia-primary">
            business automation work for you
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-[20px] text-skia-text/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          We build customized web apps that replace chaos with clarity. Scale your operations with intelligent workflows tailored to your unique business needs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="primary" 
            size="lg" 
            className="group min-w-[200px]"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a discovery call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="ghost" size="lg" className="min-w-[200px] border border-skia-link/50 hover:bg-skia-link/20">
            <PlayCircle className="mr-2 w-5 h-5" />
            View Samples
          </Button>
        </div>

        {/* Dashboard Preview / Abstract Visual */}
        <div className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-skia-primary/20 bg-skia-card/50 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-skia-primary/10 bg-skia-bg/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="mx-auto text-xs font-mono text-skia-text/40">dashboard.skia.app</div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-skia-card to-skia-bg relative p-8 flex items-center justify-center">
             {/* Abstract representation of data flow */}
             <div className="grid grid-cols-3 gap-6 w-full h-full opacity-80">
                <div className="col-span-2 row-span-2 bg-skia-link/20 rounded-lg animate-pulse border border-white/5"></div>
                <div className="bg-skia-primary/20 rounded-lg border border-white/5"></div>
                <div className="bg-skia-link/30 rounded-lg border border-white/5"></div>
                <div className="col-span-3 h-24 bg-gradient-to-r from-skia-primary/10 to-transparent rounded-lg border border-white/5 mt-auto"></div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                 <h3 className="text-2xl font-bold text-white/10 select-none">Automated Intelligence</h3>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};