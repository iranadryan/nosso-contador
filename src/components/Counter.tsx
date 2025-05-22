import { useState, useEffect } from "react";
import { CounterSection } from "./CounterSection";

interface CounterProps {
  startDate: Date;
  title: string;
}

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Counter({ startDate, title }: CounterProps) {
  const [time, setTime] = useState(calculateTimeDifference(startDate));

  function calculateTimeDifference(startDate: Date): Time {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeDifference(startDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <div>
      <strong className="text-xl font-bold block text-primary-500 leading-none">
        {title}
      </strong>
      <span className="text-sm font-medium italic text-primary-600/60 block">
        {startDate.toLocaleString(undefined, {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
      <div className="flex gap-2 mt-1.5">
        <CounterSection label="Dias" value={time.days} />
        <CounterSection label="Horas" value={time.hours} />
        <CounterSection label="Minutos" value={time.minutes} />
        <CounterSection label="Segundos" value={time.seconds} />
      </div>
    </div>
  );
}
