"use client";
import { useEffect, useRef } from "react";

export default function HorlogeClean() {
  const secondsRef = useRef<SVGLineElement | null>(null);
  const minutesRef = useRef<SVGLineElement | null>(null);
  const hoursRef = useRef<SVGLineElement | null>(null);

  useEffect(() => {
    let rafId = 0;

    function update() {
      const now = new Date();
      const ms = now.getMilliseconds();
      const s = now.getSeconds() + ms / 1000;
      const m = now.getMinutes() + s / 60;
      const h = (now.getHours() % 12) + m / 60;

      const sDeg = s * 6;
      const mDeg = m * 6;
      const hDeg = h * 30;

      if (secondsRef.current)
        secondsRef.current.setAttribute("transform", `rotate(${sDeg} 100 100)`);
      if (minutesRef.current)
        minutesRef.current.setAttribute("transform", `rotate(${mDeg} 100 100)`);
      if (hoursRef.current)
        hoursRef.current.setAttribute("transform", `rotate(${hDeg} 100 100)`);

      rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const now = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthIndex = now.getMonth();
  const today = now.getDate();
  const weekDay = now.getDay();

  return (
    <div className="horloge flex items-center justify-center my-6">
      <svg
        width={400}
        height={400}
        viewBox="0 0 200 200"
        className="rounded-full bg-[var(--color-swb-second)] shadow-lg"
      >
        <defs>
          {/* <filter id="f" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="var(--color-swb-second)"
              floodOpacity="0.4"
            />
          </filter> */}
        </defs>

        {/* <circle
          cx="100"
          cy="100"
          r="96"
          fill="var(--color-swb-second)"
          stroke="var(--color-swb-main)"
          strokeWidth="2"
          filter="url(#f)"
        /> */}

        {/* <g stroke="var(--color-swb-main)" strokeWidth="1">
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = i * 6 * (Math.PI / 180);
            const inner = i % 5 === 0 ? 80 : 86;
            const outer = 92;
            const x1 = 100 + inner * Math.sin(angle);
            const y1 = 100 - inner * Math.cos(angle);
            const x2 = 100 + outer * Math.sin(angle);
            const y2 = 100 - outer * Math.cos(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g> */}

        {months.map((m, i) => {
          const angleDeg = i * (360 / months.length) - 90;
          const angle = (angleDeg * Math.PI) / 180;
          const r = 90;
          const x = 100 + r * Math.cos(angle);
          const y = 100 + r * Math.sin(angle);
          const isActive = i === monthIndex;
          return (
            <text
              key={m}
              x={x}
              y={y}
              fontSize={8}
              fill={isActive ? "#fff" : "var(--color-swb-second)"}
              opacity={isActive ? 1 : 0}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {m}
            </text>
          );
        })}

        {Array.from({ length: 31 }).map((_, idx) => {
          const i = idx + 1;
          const angleDeg = idx * (360 / 31) - 90;
          const angle = (angleDeg * Math.PI) / 180;
          const r = 90;
          const x = 100 + r * Math.cos(angle);
          const y = 100 + r * Math.sin(angle);
          const isActive = i === today;
          return (
            <text
              key={i}
              x={x}
              y={y}
              fontSize={8}
              fill={isActive ? "#fff" : "var(--color-swb-second)"}
              opacity={isActive ? 1 : 0}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {i}
            </text>
          );
        })}

        {days.map((d, idx) => {
          const angleDeg = idx * (360 / days.length) - 90;
          const angle = (angleDeg * Math.PI) / 180;
          const r = 90;
          const x = 100 + r * Math.cos(angle);
          const y = 100 + r * Math.sin(angle);
          const isActive = idx === weekDay;
          return (
            <text
              key={d}
              x={x}
              y={y}
              fontSize={8}
              fill={isActive ? "#fff" : "var(--color-swb-second)"}
              opacity={isActive ? 1 : 0}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {d}
            </text>
          );
        })}

        <line
          ref={hoursRef}
          x1="100"
          y1="100"
          x2="100"
          y2="45"
          stroke="var(--color-swb-main)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeOpacity={0.6}
        />
        <line
          ref={minutesRef}
          x1="100"
          y1="100"
          x2="100"
          y2="35"
          stroke="var(--color-swb-main)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeOpacity={0.6}
        />
        <line
          ref={secondsRef}
          x1="100"
          y1="110"
          x2="100"
          y2="25"
          stroke="var(--color-swb-main)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity={0.6}
        />

        <circle cx="100" cy="100" r="4" fill="#fff" />
      </svg>
    </div>
  );
}
