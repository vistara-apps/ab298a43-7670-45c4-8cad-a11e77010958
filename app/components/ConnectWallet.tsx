'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = () => {
    // Simulate wallet connection
    setIsConnected(true);
    setAddress('0x1234...5678');
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-sm font-medium text-fg">{address}</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200 font-medium"
    >
      <Wallet className="w-4 h-4" />
      Connect Wallet
    </button>
  );
}
