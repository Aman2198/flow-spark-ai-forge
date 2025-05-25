
import React from 'react';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900/20 via-background to-electric-900/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="h-6 w-6 text-cosmic-400 opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <Zap className="h-8 w-8 text-electric-400 opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-2000">
        <Sparkles className="h-5 w-5 text-cosmic-300 opacity-40" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full mb-6 cosmic-glow">
            <Sparkles className="h-4 w-4 text-cosmic-500" />
            <span className="text-sm font-medium">AI-Powered Workflow Automation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automate Your
            <span className="block gradient-text">
              Workflows with AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Create powerful AI-driven workflows using our visual builder. 
            Choose from pre-built templates or design custom automations 
            with your preferred LLM models and tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cosmic-500 to-electric-500 hover:from-cosmic-600 hover:to-electric-600 text-white border-0 cosmic-glow hover:animate-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Start Building Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-morphism border-white/20 dark:border-white/10 hover:cosmic-glow transition-all duration-300 text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by 10,000+ teams worldwide
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="h-8 w-24 glass-morphism rounded"></div>
              <div className="h-8 w-24 glass-morphism rounded"></div>
              <div className="h-8 w-24 glass-morphism rounded"></div>
              <div className="h-8 w-24 glass-morphism rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cosmic-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cosmic-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
