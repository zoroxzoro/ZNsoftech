import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center' | 'split';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'dark',
  className = '',
}) => {
  const isLight = theme === 'light';

  const eyebrowColor = isLight ? 'text-on-primary-fixed-variant' : 'text-primary';
  const titleColor = isLight ? 'text-text-light-primary' : 'text-on-surface';
  const descColor = isLight ? 'text-text-muted' : 'text-on-surface-variant';

  if (align === 'split') {
    return (
      <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 ${className}`}>
        <div className="max-w-2xl flex flex-col gap-2">
          {eyebrow && (
            <span className={`font-label-mono-tag text-label-mono-tag ${eyebrowColor} uppercase tracking-widest font-semibold`}>
              {eyebrow}
            </span>
          )}
          <h2 className={`font-headline-xl text-headline-xl ${titleColor} tracking-tight leading-tight`}>
            {title}
          </h2>
        </div>
        {description && (
          <p className={`font-body-md text-body-md ${descColor} max-w-sm leading-relaxed`}>
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col gap-3 ${
        align === 'center' ? 'items-center text-center max-w-3xl mx-auto' : 'items-start max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <span className={`font-label-mono-tag text-label-mono-tag ${eyebrowColor} uppercase tracking-widest font-semibold`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-headline-xl text-headline-xl ${titleColor} tracking-tight leading-tight`}>
        {title}
      </h2>
      {description && (
        <p className={`font-body-md text-body-md ${descColor} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};
