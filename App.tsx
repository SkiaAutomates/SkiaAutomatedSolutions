import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { SystemScanner } from './components/SystemScanner';
import { CTA } from './components/CTA';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <SystemScanner />
      <CTA />
    </Layout>
  );
}

export default App;