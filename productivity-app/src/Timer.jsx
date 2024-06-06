import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(intervalIdRef.current);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  const startTimer = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handleChange = (event) => {
    setTime(Number(event.target.value) * 60);
  };

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="timer">
      <div className="display">{formatTime()}</div>
      <input
        type="number"
        onChange={handleChange}
        disabled={isRunning}
        className="time-input"
        placeholder="Set minutes"
      />
      <div className="controls">
        <button onClick={startTimer} className="start-button" disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} className="stop-button" disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer} className="reset-button" disabled={isRunning}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
