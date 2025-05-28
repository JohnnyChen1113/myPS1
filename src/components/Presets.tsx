"use client";
import React from 'react';

const presets = [
  {
    name: 'Classic Rainbow',
    elements: [
      { key: 'user', label: 'Username', enabled: true, color: '#F43F5E' },
      { key: 'host', label: 'Hostname', enabled: true, color: '#F59E42' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#FACC15' },
      { key: 'time', label: 'Time', enabled: true, color: '#16A34A' },
      { key: 'git', label: 'Git Branch', enabled: true, color: '#0EA5E9' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#A21CAF' },
    ],
  },
  {
    name: 'Minimal Gray',
    elements: [
      { key: 'user', label: 'Username', enabled: false, color: '#64748B' },
      { key: 'host', label: 'Hostname', enabled: false, color: '#64748B' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#64748B' },
      { key: 'time', label: 'Time', enabled: false, color: '#64748B' },
      { key: 'git', label: 'Git Branch', enabled: false, color: '#64748B' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#64748B' },
    ],
  },
  {
    name: 'Developer Style',
    elements: [
      { key: 'user', label: 'Username', enabled: true, color: '#4F46E5' },
      { key: 'host', label: 'Hostname', enabled: true, color: '#0EA5E9' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#16A34A' },
      { key: 'time', label: 'Time', enabled: false, color: '#F59E42' },
      { key: 'git', label: 'Git Branch', enabled: true, color: '#F43F5E' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#64748B' },
    ],
  },
  {
    name: 'Ocean Blue',
    elements: [
      { key: 'user', label: 'Username', enabled: true, color: '#0EA5E9' },
      { key: 'host', label: 'Hostname', enabled: true, color: '#38BDF8' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#60A5FA' },
      { key: 'time', label: 'Time', enabled: true, color: '#A3E635' },
      { key: 'git', label: 'Git Branch', enabled: true, color: '#F43F5E' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#0EA5E9' },
    ],
  },
  {
    name: 'Sunset',
    elements: [
      { key: 'user', label: 'Username', enabled: true, color: '#F59E42' },
      { key: 'host', label: 'Hostname', enabled: true, color: '#F43F5E' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#FACC15' },
      { key: 'time', label: 'Time', enabled: true, color: '#A21CAF' },
      { key: 'git', label: 'Git Branch', enabled: true, color: '#0EA5E9' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#F59E42' },
    ],
  },
  {
    name: 'Forest',
    elements: [
      { key: 'user', label: 'Username', enabled: true, color: '#16A34A' },
      { key: 'host', label: 'Hostname', enabled: true, color: '#A3E635' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#34D399' },
      { key: 'time', label: 'Time', enabled: true, color: '#F59E42' },
      { key: 'git', label: 'Git Branch', enabled: true, color: '#0EA5E9' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#16A34A' },
    ],
  },
  {
    name: 'Purple Dream',
    elements: [
      { key: 'user', label: 'Username', enabled: true, color: '#A21CAF' },
      { key: 'host', label: 'Hostname', enabled: true, color: '#C084FC' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#F472B6' },
      { key: 'time', label: 'Time', enabled: true, color: '#F43F5E' },
      { key: 'git', label: 'Git Branch', enabled: true, color: '#60A5FA' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#A21CAF' },
    ],
  },
  {
    name: 'Cyberpunk',
    elements: [
      { key: 'user', label: 'Username', enabled: true, color: '#F43F5E' },
      { key: 'host', label: 'Hostname', enabled: true, color: '#A21CAF' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#F59E42' },
      { key: 'time', label: 'Time', enabled: true, color: '#F472B6' },
      { key: 'git', label: 'Git Branch', enabled: true, color: '#38BDF8' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#F43F5E' },
    ],
  },
  {
    name: 'Elegant Black',
    elements: [
      { key: 'user', label: 'Username', enabled: true, color: '#FFFFFF' },
      { key: 'host', label: 'Hostname', enabled: true, color: '#FFFFFF' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#FFFFFF' },
      { key: 'time', label: 'Time', enabled: false, color: '#FFFFFF' },
      { key: 'git', label: 'Git Branch', enabled: false, color: '#FFFFFF' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#FFFFFF' },
    ],
  },
  {
    name: 'Lime Fresh',
    elements: [
      { key: 'user', label: 'Username', enabled: true, color: '#A3E635' },
      { key: 'host', label: 'Hostname', enabled: true, color: '#38BDF8' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#FACC15' },
      { key: 'time', label: 'Time', enabled: true, color: '#16A34A' },
      { key: 'git', label: 'Git Branch', enabled: true, color: '#0EA5E9' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#A3E635' },
    ],
  },
  {
    name: 'Rose Gold',
    elements: [
      { key: 'user', label: 'Username', enabled: true, color: '#F472B6' },
      { key: 'host', label: 'Hostname', enabled: true, color: '#FBBF24' },
      { key: 'cwd', label: 'Current Directory', enabled: true, color: '#F59E42' },
      { key: 'time', label: 'Time', enabled: true, color: '#F43F5E' },
      { key: 'git', label: 'Git Branch', enabled: true, color: '#A21CAF' },
      { key: 'newline', label: 'Newline', enabled: true, color: '#FFFFFF' },
      { key: 'symbol', label: 'Prompt Symbol', enabled: true, color: '#F472B6' },
    ],
  },
];

interface PresetsProps {
  setElements: (elements: any[]) => void;
}

const Presets: React.FC<PresetsProps> = ({ setElements }) => (
  <div className="mb-2 flex flex-wrap gap-2">
    <span className="font-medium mr-2 text-white">Apply preset:</span>
    {presets.map(preset => (
      <button
        key={preset.name}
        className="border border-white/20 bg-gradient-to-r from-blue-500/60 to-purple-500/60 text-white rounded-lg px-3 py-1 mb-1 text-sm font-semibold shadow hover:scale-105 hover:from-blue-400/80 hover:to-purple-400/80 transition-transform duration-200"
        onClick={() => setElements(preset.elements)}
        type="button"
      >
        {preset.name}
      </button>
    ))}
  </div>
);

export default Presets; 