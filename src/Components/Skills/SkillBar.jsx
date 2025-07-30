// components/SkillBar.jsx
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const SkillBar = ({ label, percentage }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // triggers animation on mount
  }, []);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1 text-white font-semibold">
        <span>{label}</span>
        <span>{animate && <CountUp end={percentage} duration={1.5} />}%</span>
      </div>
      <div className="w-full h-3 bg-[#1c0c20] rounded-full overflow-hidden">
        <div
          className="h-3 bg-cyan-400 transition-all duration-3000 ease-out rounded-full"
          style={{ width: animate ? `${percentage}%` : 0 }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
