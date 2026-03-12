export default function StepIndicator() {
  const steps = [
    "1. 플랫폼",
    "2. 스펙",
    "3. 옵션",
    "4. 출력"
  ];

  return (
    <div className="flex items-center justify-between py-6 max-w-2xl mx-auto mb-8 text-sm font-bold text-muted">
      {steps.map((step, idx) => (
        <span 
          key={step} 
          className={idx === 0 ? "text-accent border-b-2 border-accent pb-1" : "text-muted"}
        >
          {step}
        </span>
      ))}
    </div>
  )
}
