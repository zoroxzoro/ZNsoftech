import React from 'react';
import { Link } from 'react-router-dom';
import type { ServiceItem } from '../../data/services';

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '' }) => {
  return (
    <Link
      to={service.href}
      className={`service-row-item group p-6 sm:p-8 rounded-xl bg-canvas-light hover:bg-surface-dark hover:text-on-surface grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center shadow-sm border border-transparent hover:border-primary/20 transition-all duration-300 ${className}`}
    >
      <div className="md:col-span-1 font-label-mono-tag text-label-mono-tag text-on-primary-fixed-variant group-hover:text-primary font-bold transition-colors">
        {service.number}
      </div>
      <div className="md:col-span-4 flex flex-col gap-1">
        <span className="font-headline-sm text-headline-sm font-semibold text-text-light-primary group-hover:text-on-surface transition-colors">
          {service.title}
        </span>
        <span className="font-label-mono-tag text-label-mono-tag text-text-muted group-hover:text-tertiary transition-colors">
          {service.tags}
        </span>
      </div>
      <div className="md:col-span-6 font-body-sm text-body-sm text-text-muted group-hover:text-on-surface-variant leading-relaxed transition-colors">
        {service.description}
      </div>
      <div className="md:col-span-1 flex justify-end">
        <div className="service-arrow w-10 h-10 rounded-full bg-surface-light group-hover:bg-primary-container text-text-light-primary group-hover:text-on-primary-container flex items-center justify-center transition-all duration-300 shadow-sm">
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </div>
      </div>
    </Link>
  );
};
