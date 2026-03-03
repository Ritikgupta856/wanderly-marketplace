'use client'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-16 md:px-12 sm:px-8 px-4">
      {children}
    </div>
  )
}

export default Container
