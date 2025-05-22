interface CounterSectionProps {
  label: string;
  value: number;
}

export function CounterSection({ label, value }: CounterSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-300 rounded-md w-20 h-20 text-white shadow-lg shadow-primary-600/20">
      <span className="text-4xl font-bold leading-none">{value}</span>
      <span className="leading-none font-medium">{label}</span>
    </div>
  );
}
