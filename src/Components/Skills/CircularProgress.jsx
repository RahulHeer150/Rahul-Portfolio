// components/CircularProgress.jsx
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const CircularProgress = ({ percentage, label }) => {
  const radius = 48;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(percentage);
    }, 300);
    return () => clearTimeout(timeout);
  }, [percentage]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#2c2c2c"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#00e0ff"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            transition: 'stroke-dashoffset 1.5s ease',
          }}
        />
      </svg>
      <div className="absolute text-white text-lg font-bold">
        <CountUp end={percentage} duration={1.5} />%
      </div>
      <p className="text-white text-sm text-center mt-2">{label}</p>
    </div>
  );
};

export default CircularProgress;
