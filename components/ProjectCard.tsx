import { Project, categoryLabels, statusColors } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article
      className="border border-[#1a2e1a] bg-[#0d0d0d] rounded-lg p-5 flex flex-col gap-4 border-glow group hover:bg-[#0f0f0f] transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#00ff9f55] text-xs">
              [{project.id.toString().padStart(2, '0')}]
            </span>
            <span className="text-xs border border-current rounded px-2 py-0.5 font-mono opacity-70">
              {categoryLabels[project.category]}
            </span>
          </div>
          <h3 className="text-[#00ff9f] font-bold text-base group-hover:text-shadow-glow transition-all duration-300 font-mono">
            {project.title}
          </h3>
        </div>

        {/* Status badge */}
        <span
          className={`text-[10px] border rounded px-2 py-0.5 font-mono shrink-0 ${statusColors[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-[#00ff9f88] text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono bg-[#00ff9f0d] border border-[#00ff9f22] text-[#00ff9f77] rounded px-2 py-0.5 hover:text-[#00ff9f] hover:border-[#00ff9f44] transition-all duration-200"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer - year + links */}
      <div className="flex items-center justify-between pt-2 border-t border-[#1a2e1a]">
        <span className="text-[#00ff9f33] text-xs font-mono">
          {project.year}
        </span>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#00ff9f55] hover:text-[#00ff9f] font-mono transition-all duration-200 hover:underline"
            >
              [github]
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#00ff9f55] hover:text-[#00ff9f] font-mono transition-all duration-200 hover:underline"
            >
              [demo]
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
