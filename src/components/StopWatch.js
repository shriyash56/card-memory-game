import React, { useState } from "react";
import "../css/stopWatch.css";
import Timer from "./Timer";
  
function StopWatch({win,start}) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  React.useEffect(() => {
   handleStart();
    if(win)
    {
        handlePauseResume();
    }
  },[win])

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  }
  
  const handleReset = () => {
    setIsPaused(true);
    setIsActive(false);
    setTime(0);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  return (
    <div className="stop-watch">
      <Timer time={time} win={win} reset={handleReset} start={start}/>
    </div>
  );
}
  
export default StopWatch;