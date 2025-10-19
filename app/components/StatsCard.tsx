'use client';

import { type ReactNode } from 'react';

interface StatsCardProps {
  label: string;
  value: number;
  icon: ReactNode;
  color: 'accent' | 'red' | 'yellow' | 'green';
}

const colorClasses = {
  accent: 'bg-accent/10 text-accent',
  red: 'bg-red-500/10 text-red-400',
  yellow: 'bg-yellow-500/10 text-yellow-400',
  green: 'bg-green-500/10 text-green-400',
};

export function StatsCard({ label, value, icon, color }: StatsCardProps) {
  return (
    <div className="bg-surface rounded-lg border border-border p-6 hover:border-accent/50 transition-all duration-200 shadow-card">
      <div className="flex items-center justify-between mb-3">
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
        <span className="text-3xl font-bold text-fg">{value}</span>
      </div>
      <p className="text-sm text-muted font-medium">{label}</p>
    </div>
  );
}
