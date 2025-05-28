"use client";
import React from 'react';

interface Element {
  key: string;
  label: string;
  enabled: boolean;
  color: string;
}

interface PreviewProps {
  elements: Element[];
}

const symbolMap: Record<string, string> = {
  user: "\\u",
  host: "\\h",
  cwd: "\\w",
  time: "\\t",
  git: '$(git branch 2>/dev/null | grep "^*" | colrm 1 2)',
  symbol: '$',
};

const Preview: React.FC<PreviewProps> = ({ elements }) => {
  return (
    <div className="bg-black/80 rounded-xl p-6 text-xl font-mono text-white mb-2 overflow-x-auto shadow-inner border border-white/10 backdrop-blur">
      {elements.filter(e => e.enabled).map(e => (
        <span key={e.key} style={{ color: e.color, marginRight: 8, textShadow: '0 0 6px #fff2, 0 0 2px #fff4' }}>
          {e.key === 'symbol' ? '$' : e.key === 'newline' ? <br /> : e.label}
        </span>
      ))}
      <span className="text-gray-500 ml-2"># Preview</span>
    </div>
  );
};

export default Preview; 