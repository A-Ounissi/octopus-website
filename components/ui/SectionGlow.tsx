export default function SectionGlow() {
    return (
      <div className="relative isolate overflow-visible">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[120vw] h-[120vh] -z-10 rounded-full blur-[120px] 
          opacity-30 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse-slow"
        />
      </div>
    );
  }
  