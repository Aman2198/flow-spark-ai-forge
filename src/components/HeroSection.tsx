
import React from 'react';
import { ArrowRight, Play, Sparkles, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Floating elements - minimal and subtle */}
      <div className="absolute top-32 left-10 animate-float">
        <Brain className="h-4 w-4 text-gray-400 dark:text-gray-600 opacity-60" />
      </div>
      <div className="absolute top-48 right-16 animate-float delay-1000">
        <Sparkles className="h-5 w-5 text-gray-300 dark:text-gray-700 opacity-40" />
      </div>
      <div className="absolute bottom-48 left-20 animate-float delay-2000">
        <Brain className="h-3 w-3 text-gray-500 dark:text-gray-500 opacity-30" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-full mb-8 border border-gray-200 dark:border-gray-800">
            <Brain className="h-4 w-4 text-black dark:text-white" />
            <span className="text-sm font-medium text-black dark:text-white">AI-Powered Workflow Automation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Build AI workflows
            <span className="block text-gray-600 dark:text-gray-400">
              that think ahead
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            Create intelligent automations with our visual builder. 
            Choose from enterprise AI models or build custom workflows 
            that scale with your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="apple-button text-lg px-8 py-6 h-14"
            >
              Start building free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="apple-button-secondary text-lg px-8 py-6 h-14 border-gray-300 dark:border-gray-700"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6 font-medium">
              Trusted by teams at leading companies
            </p>
            <div className="flex items-center justify-center space-x-12 opacity-40">
              {/* Placeholder for company logos - minimalist rectangles */}
              <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-6 w-18 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-6 w-22 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
