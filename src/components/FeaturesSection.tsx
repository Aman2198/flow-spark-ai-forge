
import React from 'react';
import { Bot, Workflow, Zap, Settings, Database, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: Workflow,
      title: 'Template-Based Workflows',
      description: 'Get started instantly with pre-built workflow templates for common use cases like customer support, content generation, and data processing.',
      gradient: 'from-cosmic-500 to-cosmic-600'
    },
    {
      icon: Settings,
      title: 'Custom Workflow Builder',
      description: 'Design sophisticated workflows with our visual builder. Select LLM models, configure memory settings, and integrate your favorite tools.',
      gradient: 'from-electric-500 to-electric-600'
    },
    {
      icon: Bot,
      title: 'Multi-LLM Support',
      description: 'Choose from OpenAI, Anthropic, Google, and other leading AI models. Switch between models or use multiple models in a single workflow.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Real-time Execution',
      description: 'Watch your workflows execute in real-time with detailed logging and monitoring. Debug and optimize performance on the fly.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Database,
      title: 'Memory & Context',
      description: 'Configure persistent memory and context management for your AI agents. Maintain conversation history and learn from interactions.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, end-to-end encryption, and granular access controls for your sensitive workflows.',
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="block gradient-text">Modern Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale AI-powered workflows 
            that transform how your team works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="glass-morphism border-white/20 dark:border-white/10 hover:cosmic-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:animate-glow transition-all duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
