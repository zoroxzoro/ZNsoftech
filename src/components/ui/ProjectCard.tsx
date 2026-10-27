import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectItem } from '../../data/projects';

export interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <div
      className={`portfolio-card-item bg-surface-light p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between gap-6 group border border-slate-200/80 hover:border-primary-container/60 transition-all duration-300 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded bg-canvas-light font-label-mono-tag text-label-mono-tag text-text-muted uppercase">
            {project.category}
          </span>
          <span className="material-symbols-outlined text-text-muted text-[20px]">
            {project.icon}
          </span>
        </div>
        <h3 className="font-headline-lg text-headline-lg text-text-light-primary group-hover:text-on-primary-fixed-variant transition-colors">
          {project.title}
        </h3>
        <p className="font-body-md text-body-md text-text-muted leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Visual Display: Image or Metric Readouts */}
      {project.image ? (
        <div className="relative w-full h-56 rounded-xl overflow-hidden bg-surface-container">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      ) : project.metrics ? (
        <div className="p-4 sm:p-5 bg-canvas-light rounded-xl flex items-center justify-between">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-label-mono-tag text-label-mono-tag text-text-muted">
                {metric.label}
              </span>
              <span
                className={`font-headline-sm text-headline-sm font-bold ${
                  metric.highlight ? 'text-on-primary-fixed-variant' : 'text-text-light-primary'
                }`}
              >
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      {/* Footer Tags & Action Link */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded bg-canvas-light text-[11px] font-mono text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={project.link}
          className="inline-flex items-center gap-1 font-label-lg text-label-lg text-on-primary-fixed-variant hover:underline group/link font-semibold"
        >
          <span>Explore Case Study</span>
          <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
};
