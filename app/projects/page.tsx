'use client';

import { useState } from 'react';
import MatrixRain from '@/components/MatrixRain';
import ProjectCard from '@/components/ProjectCard';
import { projects, categoryLabels } from '@/data/projects';
import type { Project } from '@/data/projects';

const ALL_CATEGORIES = ['all', ...Object.keys(categoryLabels)] as const;
type FilterCategory = (typeof ALL_CATEGORIES)[number];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [filterKey, setFilterKey] = useState(0);

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleFilter = (cat: FilterCategory) => {
    setActiveFilter(cat);
    setFilterKey((k) => k + 1);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0 pointer-events-none">
        <MatrixRain />
      </div>
      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.93) 100%)',
        }}
      />
      {/* Scanline sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="scanline-sweep" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Page header */}
        <div className="mb-10">
          <p className="text-[#00ff9f44] text-xs font-mono mb-2">
            $ ls -la ~/projects/
          </p>
          <h1 className="text-3xl font-bold text-[#00ff9f] font-mono animate-glow mb-2">
            Projects
          </h1>
          <p className="text-[#00ff9f66] text-sm font-mono">
            {projects.length} entries found &mdash; security tools, CTF writeups
            &amp; research
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-8 p-3 border border-[#1a2e1a] rounded bg-[#0d0d0dcc]">
          <span className="text-[#00ff9f44] text-xs font-mono self-center mr-1">
            filter:
          </span>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`text-xs font-mono px-3 py-1.5 rounded border transition-all duration-200 ${
                activeFilter === cat
                  ? 'border-[#00ff9f] text-[#00ff9f] bg-[#00ff9f11] shadow-[0_0_10px_#00ff9f22]'
                  : 'border-[#1a2e1a] text-[#00ff9f55] hover:border-[#00ff9f44] hover:text-[#00ff9f88]'
              }`}
            >
              {cat === 'all'
                ? 'all'
                : categoryLabels[cat as Project['category']]}
              {cat === 'all' ? (
                <span className="ml-1.5 text-[#00ff9f55]">
                  {projects.length}
                </span>
              ) : (
                <span className="ml-1.5 text-[#00ff9f55]">
                  {projects.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          key={filterKey}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#00ff9f44] font-mono text-sm animate-fade-in-up">
            <p>$ find . -name &quot;*{activeFilter}*&quot;</p>
            <p className="mt-2">No results found.</p>
          </div>
        )}

        {/* Status line */}
        <div className="mt-8 flex items-center gap-2 font-mono text-xs text-[#00ff9f44]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
          <span>
            scan complete &mdash;{' '}
            <span className="text-[#00ff9f66]">{filtered.length}</span> entries
            indexed
          </span>
          <span className="ml-auto text-[#00ff9f22]">
            192.168.1.42:~/projects
          </span>
        </div>
      </div>
    </div>
  );
}
