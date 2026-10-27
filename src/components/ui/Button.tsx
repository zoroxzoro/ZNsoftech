import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-label-md',
    md: 'px-5 py-2.5 text-label-lg',
    lg: 'px-7 py-3.5 text-label-lg',
  }[size];

  const variantClasses = {
    primary:
      'bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary active:scale-[0.98] shadow-lg shadow-primary-container/20 border border-transparent',
    secondary:
      'bg-surface-container text-on-surface hover:bg-surface-container-high hover:border-primary/40 border border-outline-variant/30 active:scale-[0.98]',
    ghost:
      'bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-white/[0.04] active:scale-[0.98] border border-transparent',
    glow:
      'cta-glow-pulse bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary active:scale-95 shadow-xl shadow-primary-container/25 border border-transparent',
    'outline-light':
      'bg-white text-text-light-primary border border-slate-200 hover:border-primary-container hover:bg-slate-50 active:scale-[0.98]',
  }[variant];

  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg font-headline-sm font-semibold tracking-wide transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40';

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
