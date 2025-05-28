"use client";
import React from 'react';

interface Element {
  key: string;
  label: string;
  enabled: boolean;
  color: string;
}

interface ResultProps {
  shell: 'bash' | 'zsh';
  elements: Element[];
}

// Color to shell code
function colorToShell(color: string, shell: 'bash' | 'zsh') {
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  if (shell === 'bash') {
    // 用\[\033[38;2;R;G;Bm\]包裹
    return `\\[\\033[38;2;${r};${g};${b}m\\]`;
  } else {
    return `%F{#${hex}}`;
  }
}

function escapeBash(str: string) {
  // 转义 $、`、"，防止bash解析错误
  return str.replace(/([$`"\\])/g, '\\$1');
}

const symbolMap: Record<string, string> = {
  user: '\\u',
  host: '\\h',
  cwd: '\\w',
  time: '\\t',
  git: '$(git branch 2>/dev/null | grep "^*" | colrm 1 2)',
  symbol: '$',
};

const Result: React.FC<ResultProps> = ({ shell, elements }) => {
  const enabled = elements.filter(e => e.enabled);
  let ps1 = '';
  enabled.forEach((e, idx) => {
    if (e.key === 'newline') {
      ps1 += shell === 'bash' ? '\\n' : '%n';
    } else {
      ps1 += colorToShell(e.color, shell) + (symbolMap[e.key] || '');
    }
    if (idx !== enabled.length - 1) ps1 += ' ';
  });
  // Reset color
  ps1 += shell === 'bash' ? '\\[\\033[0m\\]' : '%f';

  let exportCmd = '';
  if (shell === 'bash') {
    exportCmd = `export PS1=\"${ps1}\"`;
  } else {
    exportCmd = `export PS1='${ps1}'`;
  }

  // 复制功能
  const handleCopy = async () => {
    await navigator.clipboard.writeText(exportCmd);
    alert('已复制到剪贴板！');
  };

  return (
    <div className="mt-4">
      <h2 className="font-semibold mb-2 text-white flex items-center gap-2">
        Generated configuration command:
        <button
          onClick={handleCopy}
          className="ml-2 px-2 py-1 rounded bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold shadow hover:scale-105 transition-transform"
        >
          复制
        </button>
      </h2>
      <div className="bg-black/80 rounded-lg p-3 font-mono text-base text-green-400 break-all select-all mb-2 border border-white/10 shadow-inner">
        {exportCmd}
      </div>
      <div className="text-gray-300 text-sm">
        Copy the above command to the end of your <b>{shell === 'bash' ? '~/.bashrc' : '~/.zshrc'}</b> file, or run it directly in your terminal to take effect.
      </div>
    </div>
  );
};

export default Result; 