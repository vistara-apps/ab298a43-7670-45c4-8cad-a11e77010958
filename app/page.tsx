'use client';

import { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { IssueCard } from './components/IssueCard';
import { NewIssueButton } from './components/NewIssueButton';
import { StatsCard } from './components/StatsCard';

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

const mockIssues: Issue[] = [
  {
    id: '1',
    title: 'Foundation Misalignment',
    description: 'North wall foundation is 15cm off from BIM specifications',
    severity: 'critical',
    status: 'open',
    location: 'Building A, Grid B-3',
    reporter: 'john.base.eth',
    timestamp: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    title: 'Electrical Conduit Placement',
    description: 'Conduit installed at wrong elevation per electrical drawings',
    severity: 'high',
    status: 'in-review',
    location: 'Building B, Level 2',
    reporter: 'sarah.base.eth',
    timestamp: '2024-01-15T09:15:00Z',
  },
  {
    id: '3',
    title: 'Window Frame Dimensions',
    description: 'Window opening 5cm narrower than specified',
    severity: 'medium',
    status: 'resolved',
    location: 'Building A, Level 3',
    reporter: 'mike.base.eth',
    timestamp: '2024-01-14T14:20:00Z',
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [issues, setIssues] = useState<Issue[]>(mockIssues);
  const [filter, setFilter] = useState<'all' | 'open' | 'in-review' | 'resolved'>('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const filteredIssues = filter === 'all' 
    ? issues 
    : issues.filter(issue => issue.status === filter);

  const stats = {
    total: issues.length,
    open: issues.filter(i => i.status === 'open').length,
    inReview: issues.filter(i => i.status === 'in-review').length,
    resolved: issues.filter(i => i.status === 'resolved').length,
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-fg">BIM Reality Reporter</h1>
                <p className="text-xs text-muted">On-chain construction tracking</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            label="Total Issues"
            value={stats.total}
            icon={<AlertTriangle className="w-5 h-5" />}
            color="accent"
          />
          <StatsCard
            label="Open"
            value={stats.open}
            icon={<Clock className="w-5 h-5" />}
            color="red"
          />
          <StatsCard
            label="In Review"
            value={stats.inReview}
            icon={<MapPin className="w-5 h-5" />}
            color="yellow"
          />
          <StatsCard
            label="Resolved"
            value={stats.resolved}
            icon={<CheckCircle2 className="w-5 h-5" />}
            color="green"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            {(['all', 'open', 'in-review', 'resolved'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === status
                    ? 'bg-accent text-white'
                    : 'bg-surface text-muted hover:bg-surface/80'
                }`}
              >
                {status === 'all' ? 'All Issues' : status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
          <NewIssueButton />
        </div>

        {/* Issues List */}
        <div className="space-y-4">
          {filteredIssues.length === 0 ? (
            <div className="text-center py-12 bg-surface rounded-lg border border-border">
              <AlertTriangle className="w-12 h-12 text-muted mx-auto mb-4" />
              <h3 className="text-lg font-medium text-fg mb-2">No issues found</h3>
              <p className="text-muted">
                {filter === 'all' 
                  ? 'Start by reporting your first discrepancy'
                  : `No ${filter.replace('-', ' ')} issues at the moment`
                }
              </p>
            </div>
          ) : (
            filteredIssues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
