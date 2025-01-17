import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export const TimerChallange = ({ title, targetTime }) => {
  const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      {timerExpired && <ResultModal result="lost" targetTime={targetTime} />}
      <section className="challenge">
        <p>{timerExpired && "you loast"}</p>
        <h2>{title}</h2>
        <p className="challenge-name">{targetTime} second</p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "start challenge"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "time is running " : "time is inactive"}
        </p>
      </section>
    </>
  );
};
