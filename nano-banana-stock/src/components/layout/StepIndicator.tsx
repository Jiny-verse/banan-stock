"use client";

export default function StepIndicator() {
  const steps = [
    { label: "1. 플랫폼", target: "step-1" },
    { label: "2. 스펙", target: "step-2" },
    { label: "3. 옵션", target: "step-3" },
    { label: "4. 출력", target: "step-4" }
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // Header 높이 보정
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex items-center justify-between py-6 max-w-2xl mx-auto mb-8 text-sm font-bold text-muted-foreground" id="step-1">
      {steps.map((step, idx) => (
        <button 
          key={step.target} 
          onClick={() => handleScroll(step.target)}
          className={`hover:text-text transition-colors ${idx === 0 ? "text-accent border-b-2 border-accent pb-1 hover:text-accent" : "text-muted-foreground"}`}
        >
          {step.label}
        </button>
      ))}
    </div>
  )
}
