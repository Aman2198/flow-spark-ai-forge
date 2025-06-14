
import React from 'react';
import { Brain, Zap } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        {/* Main logo container */}
        <div className={`${sizeClasses[size]} relative flex items-center justify-center bg-black dark:bg-white rounded-lg`}>
          {/* AI Brain icon */}
          <Brain className={`${size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-6 w-6'} text-white dark:text-black`} />
          
          {/* Lightning bolt overlay for AI accent */}
          <Zap className={`absolute ${size === 'sm' ? 'h-2 w-2 -top-0.5 -right-0.5' : size === 'md' ? 'h-3 w-3 -top-1 -right-1' : 'h-4 w-4 -top-1.5 -right-1.5'} text-gray-600 dark:text-gray-400`} />
        </div>
        
        {/* Subtle glow effect */}
        <div className={`absolute inset-0 ${sizeClasses[size]} bg-black/20 dark:bg-white/20 rounded-lg blur-sm -z-10`}></div>
      </div>
      
      {showText && (
        <span className={`${textSizeClasses[size]} font-semibold tracking-tight text-black dark:text-white`}>
          WorkflowAI
        </span>
      )}
    </div>
  );
}
