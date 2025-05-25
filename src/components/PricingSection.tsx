
import React from 'react';
import { Check, Zap, Crown, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'Free',
      description: 'Perfect for individuals and small teams getting started',
      features: [
        '5 workflow executions/month',
        '3 workflow templates',
        'Basic AI models (GPT-3.5)',
        'Email support',
        'Community access'
      ],
      buttonText: 'Get Started Free',
      popular: false,
      gradient: 'from-cosmic-500 to-cosmic-600'
    },
    {
      name: 'Professional',
      icon: Crown,
      price: '$29',
      period: '/month',
      description: 'For growing teams that need more power and flexibility',
      features: [
        '1,000 workflow executions/month',
        'All workflow templates',
        'Premium AI models (GPT-4, Claude)',
        'Custom workflow builder',
        'Priority email support',
        'Advanced analytics',
        'Team collaboration'
      ],
      buttonText: 'Start Free Trial',
      popular: true,
      gradient: 'from-electric-500 to-electric-600'
    },
    {
      name: 'Enterprise',
      icon: Building,
      price: 'Custom',
      description: 'For large organizations with advanced requirements',
      features: [
        'Unlimited workflow executions',
        'Custom AI model integrations',
        'Advanced security & compliance',
        'Dedicated account manager',
        'SLA guarantee',
        'Custom integrations',
        'On-premise deployment'
      ],
      buttonText: 'Contact Sales',
      popular: false,
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent
            <span className="block gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your team. Start free and scale as you grow.
            All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative glass-morphism border-white/20 dark:border-white/10 transition-all duration-300 ${
                plan.popular
                  ? 'cosmic-glow scale-105 border-cosmic-500/50'
                  : 'hover:cosmic-glow hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cosmic-500 to-electric-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${plan.gradient} p-3 mx-auto mb-4`}>
                  <plan.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cosmic-500 to-electric-500 hover:from-cosmic-600 hover:to-electric-600 text-white border-0 cosmic-glow'
                      : 'glass-morphism border-white/20 dark:border-white/10 hover:cosmic-glow'
                  } transition-all duration-300`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
