import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={`w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
