import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WinrarGuide } from './components/WinrarGuide';
import { InstallationGuide } from './components/InstallationGuide';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Header />
      <Hero />
      <Features />
      <WinrarGuide />
      <InstallationGuide />
      <FAQ />
      <Footer />
    </div>
  );
}