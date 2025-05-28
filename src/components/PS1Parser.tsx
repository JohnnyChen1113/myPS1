"use client";
import React, { useState } from "react";

const elementMap = [
  { key: "user", label: "Username", pattern: /\\u/ },
  { key: "host", label: "Hostname", pattern: /\\h/ },
  { key: "cwd", label: "Current Directory", pattern: /\\w/ },
  { key: "time", label: "Time", pattern: /\\t/ },
  { key: "git", label: "Git Branch", pattern: /\$\(git.*?\)/ },
  { key: "symbol", label: "Prompt Symbol", pattern: /\$/ },
  { key: "newline", label: "Newline", pattern: /\\n|%n/ },
];

function parseColor(str: string, idx: number) {
  // bash: \033[38;2;R;G;Bm  zsh: %F{#xxxxxx}
  // 只检测当前位置前的颜色
  // bash: \\[\033[38;2;R;G;Bm\\]
  const bashColor = /\\\\\[\\\\033\[38;2;(\d+);(\d+);(\d+)m\\\\\]/g;
  const zshColor = /%F\{#([0-9a-fA-F]{6})\}/g;
  let color = null;
  let match;
  let lastIdx = -1;
  // bash
  while ((match = bashColor.exec(str))) {
    if (match.index > idx) break;
    color = `rgb(${match[1]},${match[2]},${match[3]})`;
    lastIdx = match.index;
  }
  // zsh
  while ((match = zshColor.exec(str))) {
    if (match.index > idx) break;
    color = `#${match[1]}`;
    lastIdx = match.index;
  }
  return color;
}

export default function PS1Parser() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any[]>([]);

  function handleParse() {
    const found: any[] = [];
    let str = input;
    elementMap.forEach((el) => {
      let m;
      let regex = new RegExp(el.pattern, "g");
      while ((m = regex.exec(str))) {
        const color = parseColor(str, m.index);
        found.push({ key: el.key, label: el.label, color });
      }
    });
    setResult(found);
  }

  return (
    <div className="my-6 p-4 bg-white/10 rounded-xl border border-white/20 shadow">
      <h2 className="text-lg font-bold text-white mb-2">Reverse parse PS1</h2>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <input
          className="flex-1 px-3 py-2 rounded bg-black/60 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono"
          placeholder="Paste your PS1 config string..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-transform"
          onClick={handleParse}
        >
          Parse
        </button>
      </div>
      {result.length > 0 && (
        <div className="mt-4">
          <div className="text-white mb-2">Detected elements:</div>
          <ul className="space-y-1">
            {result.map((el, i) => (
              <li key={el.key + i} className="text-blue-300 font-mono flex items-center gap-2">
                {el.label}
                {el.color && (
                  <span className="ml-2 px-2 py-0.5 rounded text-xs" style={{ background: el.color, color: '#222' }}>
                    {el.color}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 