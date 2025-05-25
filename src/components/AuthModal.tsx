
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthModalProps {
  type: 'login' | 'signup' | null;
  isOpen: boolean;
  onClose: () => void;
  onSwitchMode: (mode: 'login' | 'signup') => void;
}

export function AuthModal({ type, isOpen, onClose, onSwitchMode }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Auth attempt:', { type, formData });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!type) return null;

  const isLogin = type === 'login';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md glass-morphism border-white/20 dark:border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center gradient-text">
            {isLogin ? 'Welcome Back' : 'Join WorkflowAI'}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {isLogin
              ? 'Sign in to your account to continue'
              : 'Create your account and start automating workflows'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="pl-10 glass-morphism border-white/20 dark:border-white/10"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="pl-10 glass-morphism border-white/20 dark:border-white/10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="pl-10 pr-10 glass-morphism border-white/20 dark:border-white/10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cosmic-500 to-electric-500 hover:from-cosmic-600 hover:to-electric-600 text-white border-0 cosmic-glow hover:animate-glow transition-all duration-300"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
            </p>
            <Button
              type="button"
              variant="link"
              onClick={() => onSwitchMode(isLogin ? 'signup' : 'login')}
              className="text-cosmic-500 hover:text-cosmic-600 p-0 h-auto"
            >
              {isLogin ? 'Sign up for free' : 'Sign in here'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
