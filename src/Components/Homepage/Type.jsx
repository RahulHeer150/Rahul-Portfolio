import React, { useState, useEffect } from "react";

function Type() {
  const strings = [
    "MERN Stack Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Open Source Contributor",
    "UI/UX Designer",
  ];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[currentIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setCurrentText((prev) => currentString.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <div className="font-serif text-4xl pt-4 text-white">
      {currentText}
      <span className="text-sky-400">|</span>
    </div>
  );
}

export default Type;