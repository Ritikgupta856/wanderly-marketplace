'use client';

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`mx-auto max-w-[2520px] px-4 sm:px-8 md:px-12 xl:px-16 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
