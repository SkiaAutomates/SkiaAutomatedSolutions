import React from 'react';
import { Layers, Zap, Database, Lock, BarChart3, Globe } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: '1',
    title: 'Comprehensive Portfolio Tracking',
    description: 'Monitor all your business assets and project statuses across multiple departments in one single, real-time dashboard.',
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
  },
  {
    id: '2',
    title: 'Custom Workflows',
    description: 'Stop using generic tools. We build logic that matches your specific operational requirements precisely.',
    icon: <Zap className="w-6 h-6 text-secondary" />,
  },
  {
    id: '3',
    title: 'Centralized Data',
    description: 'Eliminate data silos. Connect your CRM, accounting, and project management tools into one unified source of truth.',
    icon: <Database className="w-6 h-6 text-blue-400" />,
  },
  {
    id: '4',
    title: 'Risk Assessment Tools',
    description: 'Evaluate potential bottlenecks in your workflow automatically before they become critical issues.',
    icon: <Lock className="w-6 h-6 text-orange-400" />,
  },
  {
    id: '5',
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning to uncover hidden opportunities for efficiency within your daily operations.',
    icon: <Layers className="w-6 h-6 text-purple-400" />,
  },
  {
    id: '6',
    title: 'Client Portals',
    description: 'Give your clients a professional, branded experience to view project progress and share files securely.',
    icon: <Globe className="w-6 h-6 text-teal-400" />,
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wide uppercase text-sm">Capabilities</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Powerful tools to manage, analyze, and optimize</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to turn your chaotic spreadsheets into a streamlined digital empire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 border border-white/5 group-hover:border-primary/30 transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};