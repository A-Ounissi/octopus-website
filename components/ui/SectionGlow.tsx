export default function SectionGlow() {
    return (
      <div className="relative isolate overflow-visible">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[120vw] h-[120vh] -z-10 rounded-full blur-[120px] 
          opacity-40 bg-gradient-to-r from-[#00C6FF] via-[#ff0080] to-[#7928CA] animate-pulse-slow"
        />
      </div>
    );
  }
  