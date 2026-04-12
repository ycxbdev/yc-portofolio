import TerminalHero from '@/components/TerminalHero';
import ProjectCard from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import MatrixRain from '@/components/MatrixRain';
import { projects } from '@/data/projects';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      {/* Matrix rain — cubre toda la página */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <MatrixRain />
      </div>
      {/* Vignette global */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            'radial-gradient(ellipse at center, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.92) 100%)',
        }}
      />

      {/* Contenido sobre el matrix */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Hero section */}
        <TerminalHero />

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 text-[#00ff9f33] text-xs font-mono">
            <span className="flex-1 h-px bg-[#1a2e1a]" />
            <span>featured projects</span>
            <span className="flex-1 h-px bg-[#1a2e1a]" />
          </div>
        </div>

        {/* Featured projects section */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-[#00ff9f44] text-xs font-mono mb-1">
                $ ls -la projects/ | head -3
              </p>
              <h2 className="text-xl font-bold text-[#00ff9f] font-mono">
                Latest Work
              </h2>
            </div>
            <a
              href="/projects"
              className="text-xs font-mono text-[#00ff9f66] hover:text-[#00ff9f] border border-[#1a2e1a] hover:border-[#00ff9f33] px-4 py-2 rounded transition-all duration-200"
            >
              view all →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Skills section */}
        <SkillsSection />
      </div>
    </div>
  );
}
