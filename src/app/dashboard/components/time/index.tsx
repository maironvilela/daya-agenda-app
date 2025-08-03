'use client';

import React, { useState, useEffect } from 'react';

export const TimeComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (!time) return null;

  return (
    <div className="text-2xl font-mono text-cyan-400 mb-1">
      {time.toLocaleTimeString()}
    </div>
  );
};
