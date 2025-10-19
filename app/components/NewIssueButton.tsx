'use client';

import { Plus } from 'lucide-react';

export function NewIssueButton() {
  const handleClick = () => {
    // TODO: Open new issue modal
    console.log('Opening new issue form...');
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
    >
      <Plus className="w-5 h-5" />
      Report Issue
    </button>
  );
}
