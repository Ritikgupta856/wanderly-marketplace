'use client'

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`max-w-[2520px] mx-auto xl:px-16 md:px-12 sm:px-8 px-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container
