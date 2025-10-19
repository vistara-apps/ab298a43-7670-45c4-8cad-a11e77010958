'use client';

import { AlertTriangle, MapPin, User, Clock, CheckCircle2, Eye } from 'lucide-react';

interface Issue {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in-review' | 'resolved';
  location: string;
  reporter: string;
  timestamp: string;
  imageUrl?: string;
}

interface IssueCardProps {
  issue: Issue;
}

const severityColors = {
  low: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  high: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  critical: 'bg-red-500/10 text-red-400 border-red-500/20',
};

const statusColors = {
  open: 'bg-red-500/10 text-red-400',
  'in-review': 'bg-yellow-500/10 text-yellow-400',
  resolved: 'bg-green-500/10 text-green-400',
};

const statusIcons = {
  open: Clock,
  'in-review': Eye,
  resolved: CheckCircle2,
};

export function IssueCard({ issue }: IssueCardProps) {
  const StatusIcon = statusIcons[issue.status];
  
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-surface rounded-lg border border-border p-6 hover:border-accent/50 transition-all duration-200 shadow-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-fg">{issue.title}</h3>
            <span className={`px-2 py-1 rounded text-xs font-medium border ${severityColors[issue.severity]}`}>
              {issue.severity.toUpperCase()}
            </span>
          </div>
          <p className="text-muted text-sm leading-relaxed">{issue.description}</p>
        </div>
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${statusColors[issue.status]}`}>
          <StatusIcon className="w-4 h-4" />
          <span className="text-xs font-medium capitalize">{issue.status.replace('-', ' ')}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          <span>{issue.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <User className="w-4 h-4" />
          <span>{issue.reporter}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{formatDate(issue.timestamp)}</span>
        </div>
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-border">
        <button className="flex-1 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200 text-sm font-medium">
          View Details
        </button>
        {issue.status === 'open' && (
          <button className="px-4 py-2 bg-surface border border-border text-fg rounded-lg hover:bg-surface/80 transition-all duration-200 text-sm font-medium">
            Verify Resolution
          </button>
        )}
      </div>
    </div>
  );
}
