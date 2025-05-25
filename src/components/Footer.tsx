
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Zap } from 'lucide-react';

export function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Templates', href: '#templates' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Integrations', href: '#integrations' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#careers' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'API Reference', href: '#api' },
        { name: 'Community', href: '#community' },
        { name: 'Support', href: '#support' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'Security', href: '#security' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Mail, href: '#email', label: 'Email' },
  ];

  return (
    <footer className="bg-background/50 backdrop-blur-xl border-t border-white/20 dark:border-white/10">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Zap className="h-8 w-8 text-cosmic-500" />
                <div className="absolute inset-0 h-8 w-8 bg-cosmic-500/20 rounded-full blur-lg"></div>
              </div>
              <span className="text-xl font-bold gradient-text">WorkflowAI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Automate your workflows with the power of AI. Build, deploy, and scale 
              intelligent automations that transform how your team works.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="h-10 w-10 rounded-full glass-morphism border-white/20 dark:border-white/10 flex items-center justify-center hover:cosmic-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20 dark:border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 WorkflowAI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#status"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              System Status
            </a>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
