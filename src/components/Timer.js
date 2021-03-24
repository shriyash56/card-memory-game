import React from "react";
import "../css/stopWatch.css";
import Windialog from "./Windialog";

export default function Timer({ time, win, reset,start }) {
  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);

  const sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);

  const miliseconds = ("0" + ((time / 10) % 100)).slice(-2);

  const score = minutes + ":" + sec + ":" + miliseconds;

  return (
    <>
      <div className="timer">
        <span className="digits">{minutes}:</span>
        <span className="digits">{sec}:</span>
        <span className="digits mili-sec">{miliseconds}</span>
      </div>
      <div className="instructions">
        <h3>Instructions</h3>
        <ul className="details">
          <li style={{ textAlign: "justify" }}>
            Card memory is a game where you have to click on a card to see what
            image is underneath it and try to find the matching image underneath
            the other cards
          </li>
          <li>When all the matches have been found you will be winner</li>
        </ul>
      </div>
      {win && <Windialog isOpen={win} score={score} reset={reset} start={start}/>}
    </>
  );
}
