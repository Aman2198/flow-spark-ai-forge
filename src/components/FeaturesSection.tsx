
import React from 'react';
import { Bot, Workflow, Zap, Settings, Database, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Drag and drop interface to create complex AI workflows without writing code. Connect data sources, AI models, and actions seamlessly.',
    },
    {
      icon: Bot,
      title: 'Enterprise AI Models',
      description: 'Access GPT-4, Claude, Gemini, and other leading AI models. Switch between providers or combine multiple models in one workflow.',
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'Connect to your existing tools and databases. REST APIs, webhooks, and native integrations with popular business applications.',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Execute workflows instantly with real-time monitoring and logging. Debug and optimize performance with detailed analytics.',
    },
    {
      icon: Database,
      title: 'Intelligent Memory',
      description: 'AI agents that remember context across conversations and interactions. Persistent memory for improved decision making.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with end-to-end encryption. Role-based access control and audit logs for complete transparency.',
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-950/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Everything you need to
            <span className="block text-gray-600 dark:text-gray-400">automate with AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-normal">
            Professional tools for building, deploying, and scaling 
            AI-powered workflows that transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-xl bg-black dark:bg-white p-3 mb-4 group-hover:scale-105 transition-transform duration-200">
                  <feature.icon className="h-6 w-6 text-white dark:text-black" />
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
