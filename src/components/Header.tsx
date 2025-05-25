
import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { AuthModal } from './AuthModal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Templates', href: '#templates' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 glass-morphism border-b border-white/20 dark:border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Zap className="h-8 w-8 text-cosmic-500 animate-glow" />
                <div className="absolute inset-0 h-8 w-8 bg-cosmic-500/20 rounded-full blur-lg animate-pulse"></div>
              </div>
              <span className="text-xl font-bold gradient-text">
                WorkflowAI
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                onClick={() => setAuthModal('login')}
                className="text-foreground/80 hover:text-foreground"
              >
                Login
              </Button>
              <Button
                onClick={() => setAuthModal('signup')}
                className="bg-gradient-to-r from-cosmic-500 to-electric-500 hover:from-cosmic-600 hover:to-electric-600 text-white border-0 cosmic-glow hover:animate-glow transition-all duration-300"
              >
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-9 w-9"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-white/20 dark:border-white/10 animate-fade-in">
              <nav className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-foreground/80 hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setAuthModal('login');
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => {
                      setAuthModal('signup');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-cosmic-500 to-electric-500 hover:from-cosmic-600 hover:to-electric-600 text-white border-0"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modals */}
      <AuthModal
        type={authModal}
        isOpen={authModal !== null}
        onClose={() => setAuthModal(null)}
        onSwitchMode={(mode) => setAuthModal(mode)}
      />
    </>
  );
}
