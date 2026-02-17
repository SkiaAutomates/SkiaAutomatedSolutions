import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}