import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Emma Johnson',
    role: 'Operations Director',
    company: 'Tech Innovators Inc.',
    quote: "The AI Scheduling Assistant has revolutionized the way we manage our time. Meetings are now seamlessly organized without any effort on my part.",
    image: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'CEO',
    company: 'BuildRight Construction',
    quote: "Skia Automated Solutions didn't just build a website; they built a system that saves us 20 hours of admin work every single week. ROI was immediate.",
    image: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: 't3',
    name: 'Sarah Miller',
    role: 'Founder',
    company: 'Creative Solutions',
    quote: "Finally, a development partner who understands business logic. The custom portal they built has completely transformed our client onboarding experience.",
    image: 'https://picsum.photos/100/100?random=3'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0B0D11] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-skia-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-[36px] font-bold text-white mb-4">Trusted by modern businesses</h2>
          <p className="text-[20px] text-skia-text/60">
            See how Skia Automates helps leaders reclaim their time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-skia-card p-8 rounded-skia border border-skia-link/30 relative">
              <Quote className="absolute top-8 right-8 text-skia-primary/20 w-10 h-10" />
              
              <p className="text-skia-text/90 text-lg mb-8 relative z-10 italic leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-skia-primary/50"
                />
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-sm text-skia-text/50">{t.role} at {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};