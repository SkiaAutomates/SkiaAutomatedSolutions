import React from 'react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Skia's automation tools completely transformed our workflow. We went from manual data entry to a fully automated pipeline in weeks.",
    name: "Alex Rivera",
    role: "CTO",
    company: "Nexus Tech",
    color: "bg-blue-500"
  },
  {
    quote: "The dashboard implementation is flawless. It's rare to find a team that cares about both the code quality and the design aesthetics.",
    name: "Sarah Chen",
    role: "Product Lead",
    company: "Orbit AI",
    color: "bg-purple-500"
  },
  {
    quote: "We reclaimed 40+ hours a week thanks to the custom scheduling system Skia built for us. The ROI was immediate.",
    name: "Marcus Johnson",
    role: "Director of Ops",
    company: "BuildCo",
    color: "bg-amber-500"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative bg-[#0B0C10] py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by modern innovators</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what our clients say about transforming their businesses with Skia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group">
              <Quote className="text-primary mb-6 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
              <p className="text-gray-300 mb-8 leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}, {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};