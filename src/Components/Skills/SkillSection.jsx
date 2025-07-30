// pages/SkillsSection.jsx
import React from 'react';
import SkillBar from '../Skills/SkillBar';
import CircularProgress from '../Skills/CircularProgress';
import Techstack from '../AboutPage/TechStack';

const SkillSection = () => {
  return (
    <>
    <Techstack/>
    <section className="bg-[#131c2c] text-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Technical Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Technical Skills</h2>
          <SkillBar label="HTML" percentage={90} />
          <SkillBar label="CSS" percentage={80} />
          <SkillBar label="JavaScript" percentage={70} />
          <SkillBar label="DSA" percentage={30} />
          <SkillBar label="C++" percentage={80} />
          <SkillBar label="C" percentage={90} />
          <SkillBar label="React" percentage={30} />
        </div>

        {/* Professional Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Professional Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            <CircularProgress label="Team Work" percentage={80} />
            <CircularProgress label="Communication" percentage={90} />
            <CircularProgress label="Problem Solving" percentage={60} />
            <CircularProgress label="Customer Service" percentage={70} />
            <CircularProgress label="Self-Motivation" percentage={77} />
            <CircularProgress label="Confidence" percentage={85} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SkillSection;
