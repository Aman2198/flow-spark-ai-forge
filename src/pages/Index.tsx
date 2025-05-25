
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PricingSection } from '@/components/PricingSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="workflow-ai-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
