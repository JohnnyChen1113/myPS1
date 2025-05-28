"use client";
import React from 'react';

interface ShellSelectorProps {
  shell: 'bash' | 'zsh';
  setShell: (shell: 'bash' | 'zsh') => void;
}

const ShellSelector: React.FC<ShellSelectorProps> = ({ shell, setShell }) => (
  <div className="flex items-center gap-4">
    <span className="font-medium text-white">Select Shell:</span>
    <select
      className="border border-white/30 bg-white/10 text-white rounded px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      value={shell}
      onChange={e => setShell(e.target.value as 'bash' | 'zsh')}
    >
      <option value="bash">Bash</option>
      <option value="zsh">Zsh</option>
    </select>
  </div>
);

export default ShellSelector; 