import { useState, useEffect } from "react";

// Timer Display Component
function TimerDisplay({ time }) {
  const formatTime = (value) => value.toString().padStart(2, "0");

  return (
    <div className="text-[10rem] font-bold font-sulphur tracking-wider text-white">
      <span className="timer-text">{formatTime(time.hours)}</span>
      <span className="timer-text">:</span>
      <span className="timer-text">{formatTime(time.minutes)}</span>
      <span className="timer-text">:</span>
      <span className="timer-text">{formatTime(time.seconds)}</span>
    </div>
  );
}

export default function TimerPanel() {
  const targetDate = new Date("2025-04-24T00:00:00").getTime();
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTime({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTime({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <TimerDisplay time={time} />
        <style jsx global>{`
          .timer-text {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
              0 0 20px rgba(255, 255, 255, 0.5),
              0 0 30px rgba(255, 255, 255, 0.3);
          }
        `}</style>
      </div>
    </>
  );
}
