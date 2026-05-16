import { cn } from '@/lib/utils';
import React from 'react';

interface NeonTextProps {
  children: React.ReactNode;
  color?: 'cyan' | 'red' | 'purple' | 'gold';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function NeonText({
  children,
  color = 'cyan',
  className,
  as: Tag = 'span',
}: NeonTextProps) {
  const colorMap = {
    cyan:   'text-rocket-cyan text-glow-cyan',
    red:    'text-rocket-red text-glow-red',
    purple: 'text-rocket-purple text-glow-purple',
    gold:   'text-rocket-gold text-glow-gold',
  };

  return (
    <Tag className={cn(colorMap[color], className)}>
      {children}
    </Tag>
  );
}
