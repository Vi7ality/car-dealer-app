import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div
      className={`mx-auto max-w-full px-4 sm:max-w-xl sm:px-6 md:max-w-3xl lg:max-w-5xl lg:px-8 xl:max-w-7xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
