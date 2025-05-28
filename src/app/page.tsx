"use client";
import React, { useState } from 'react';
import ShellSelector from '../components/ShellSelector';
import ElementSelector from '../components/ElementSelector';
import Presets from '../components/Presets';
import Preview from '../components/Preview';
import Result from '../components/Result';
import PS1Parser from '../components/PS1Parser';

// 定义Element类型，和ElementSelector一致
interface Element {
  key: string;
  label: string;
  enabled: boolean;
  color: string;
}

const defaultElements = [
  { key: 'user', label: 'Username', defaultColor: '#4F46E5' },
  { key: 'host', label: 'Hostname', defaultColor: '#16A34A' },
  { key: 'cwd', label: 'Current Directory', defaultColor: '#F59E42' },
  { key: 'time', label: 'Time', defaultColor: '#F43F5E' },
  { key: 'git', label: 'Git Branch', defaultColor: '#0EA5E9' },
  { key: 'newline', label: 'Newline', defaultColor: '#FFFFFF' },
  { key: 'symbol', label: 'Prompt Symbol', defaultColor: '#64748B' },
];

export default function HomePage() {
  const [shell, setShell] = useState<'bash' | 'zsh'>('bash');
  const [elements, setElements] = useState<Element[]>(
    defaultElements.map(e => ({ key: e.key, label: e.label, enabled: true, color: e.defaultColor }))
  );

  const handleElementChange = (key: string, enabled: boolean, color: string) => {
    setElements(els => els.map(e => e.key === key ? { ...e, enabled, color } : e));
  };

  const handlePreset = (preset: Element[]) => {
    setElements(preset);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#232526] to-[#414345] py-12 px-2 md:px-0 flex flex-col items-center">
      <div className="max-w-2xl w-full mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-8 border border-white/20">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-white drop-shadow-lg tracking-wide animate-pulse">myPS1 - Shell Prompt Config Generator</h1>
        <ShellSelector shell={shell} setShell={setShell} />
        <Presets setElements={handlePreset} />
        <ElementSelector elements={elements} onChange={handleElementChange} setElements={setElements} />
        <Preview elements={elements} />
        <Result shell={shell} elements={elements} />
        <PS1Parser />
      </div>
      <footer className="text-center text-gray-400 mt-12 text-sm">© 2024 myPS1</footer>
    </main>
  );
} 