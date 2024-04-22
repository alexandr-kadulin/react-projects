import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { VscDebugStart, VscDebugPause, VscDebugRestart } from "react-icons/vsc";
import { useEffect, useState } from "react";

export default function App() {
  const initialTime = 25 * 60;

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [seconds, setSeconds] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  let intervalId;

  function toggleTimer() {
    setIsActive((prev) => !prev);
  }

  function resetTimer() {
    toggleAlert("stop");
    setSeconds(initialTime);
    setSessionLength(25);
    setBreakLength(5);
    setIsActive(false);
    setIsBreak(false);
  }

  function toggleAlert(action) {
    const audio = document.getElementById("beep");

    if (action === "play") {
      audio.play();
    }

    if (action === "stop") {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  function formatTime(secs) {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  function updateSessionLength(action) {
    if (!isActive) {
      if (action === "inc" && sessionLength !== 60) {
        setSessionLength((sessionLength) => sessionLength + 1);
        if (!isBreak) {
          setSeconds((sessionLength + 1) * 60);
        }
      }

      if (action === "dec" && sessionLength !== 1) {
        setSessionLength((sessionLength) => sessionLength - 1);
        if (!isBreak) {
          setSeconds((sessionLength - 1) * 60);
        }
      }
    }
  }

  function updateBreakLength(action) {
    if (!isActive) {
      if (action === "inc" && breakLength !== 60) {
        setBreakLength((breakLength) => breakLength + 1);
        if (isBreak) {
          setSeconds((breakLength + 1) * 60);
        }
      }

      if (action === "dec" && breakLength !== 1) {
        setBreakLength((breakLength) => breakLength - 1);
        if (isBreak) {
          setSeconds((breakLength - 1) * 60);
        }
      }
    }
  }

  useEffect(() => {
    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds <= 0) {
      setTimeout(() => {
        clearInterval(intervalId);
        toggleAlert("play");

        if (!isBreak) {
          setSeconds(breakLength * 60);
        } else {
          setSeconds(sessionLength * 60);
        }

        setIsBreak((prev) => !prev);
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds]);

  return (
    <main className="grid place-items-center min-h-screen font-mono">
      <section className="flex flex-col gap-4">
        <h1 className="text-lg font-bold">Pomodoro Timer</h1>
        <div className="flex items-center gap-2">
          <div id="start_stop" className="cursor-pointer" onClick={toggleTimer}>
            {isActive ? <VscDebugPause /> : <VscDebugStart />}
          </div>
          <div id="reset" className="cursor-pointer" onClick={resetTimer}>
            <VscDebugRestart />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div id="session-label" className="select-none">
            Session Length:
          </div>
          <div id="session-length" className="select-none">
            {sessionLength}
          </div>
          <div
            id="session-increment"
            className="cursor-pointer"
            onClick={() => updateSessionLength("inc")}
          >
            <BiSolidUpArrow />
          </div>
          <div
            id="session-decrement"
            className="cursor-pointer"
            onClick={() => updateSessionLength("dec")}
          >
            <BiSolidDownArrow />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div id="break-label" className="select-none">
            Break Length:
          </div>
          <div id="break-length" className="select-none">
            {breakLength}
          </div>
          <div
            id="break-increment"
            className="cursor-pointer"
            onClick={() => updateBreakLength("inc")}
          >
            <BiSolidUpArrow />
          </div>
          <div
            id="break-decrement"
            className="cursor-pointer"
            onClick={() => updateBreakLength("dec")}
          >
            <BiSolidDownArrow />
          </div>
        </div>
        <div className="flex gap-2">
          <div id="timer-label" className="select-none">
            {isBreak ? "Break" : "Session"}:
          </div>
          <div id="time-left" className="select-none">
            {formatTime(seconds)}
          </div>
        </div>
        <audio
          id="beep"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
      </section>
    </main>
  );
}
