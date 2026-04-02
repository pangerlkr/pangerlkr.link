'use client';

import React, { useState, useEffect, useCallback } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export default function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split('').map((char, index) => {
          if (index < iteration) return text[index];
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }
      iteration += 1 / 3;
    }, 30);
  }, [text, isScrambling]);

  useEffect(() => {
    const timeout = setTimeout(scramble, delay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span 
      onMouseEnter={scramble}
      className="inline-block cursor-default"
    >
      {displayText}
    </span>
  );
}
