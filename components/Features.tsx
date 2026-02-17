import React from 'react';
import { Feature } from '../types';
import { Layers, Zap, Database, Lock, BarChart3, Globe } from 'lucide-react';

const features: Feature[] = [
  {
    id: '1',
    title: 'Comprehensive Portfolio Tracking',
    description: 'Monitor all your business assets and project statuses across multiple departments in one single, real-time dashboard.',
    icon: <BarChart3 className="w-6 h-6 text-white" />,
  },
  {
    id: '2',
    title: 'Custom Workflows',
    description: 'Stop using generic tools. We build logic that matches your specific operational requirements precisely.',
    icon: <Zap className="w-6 h-6 text-white" />,
  },
  {
    id: '3',
    title: 'Centralized Data',
    description: 'Eliminate data silos. Connect your CRM, accounting, and project management tools into one unified source of truth.',
    icon: <Database className="w-6 h-6 text-white" />,
  },
  {
    id: '4',
    title: 'Risk Assessment Tools',
    description: 'Evaluate potential bottlenecks in your workflow automatically before they become critical issues.',
    icon: <Lock className="w-6 h-6 text-white" />,
  },
  {
    id: '5',
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning to uncover hidden opportunities for efficiency within your daily operations.',
    icon: <Layers className="w-6 h-6 text-white" />,
  },
  {
    id: '6',
    title: 'Client Portals',
    description: 'Give your clients a professional, branded experience to view project progress and share files securely.',
    icon: <Globe className="w-6 h-6 text-white" />,
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-skia-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold text-white mb-4">Powerful tools to manage, analyze, and optimize</h2>
          <p className="text-[20px] text-skia-text/60 max-w-2xl mx-auto">
            Everything you need to turn your chaotic spreadsheets into a streamlined digital empire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="group p-8 rounded-skia bg-skia-card hover:bg-skia-link/40 border border-skia-link/50 hover:border-skia-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-skia-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-skia-primary transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-skia-text/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};