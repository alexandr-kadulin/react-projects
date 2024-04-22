import { SOUND_DATA } from "./data.js";
import { useEffect, useState } from "react";

export default function App() {
  const [displayValue, setDisplayValue] = useState("");

  const play = (src, name, key) => {
    const audioElement = document.querySelector(`audio#${key}`);
    setDisplayValue(name);
    audioElement.play();
    setTimeout(() => setDisplayValue(""), 100);
  };

  const onKeyDown = (e) => {
    const sound = SOUND_DATA.find((sound) => sound.key === e.key);

    if (sound) {
      const audioElement = document.querySelector(`audio#${sound.key}`);
      setDisplayValue(sound.name);
      audioElement.play();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", () => setDisplayValue(""));
  }, []);

  return (
    <main id="drum-machine" className="grid place-items-center min-h-screen">
      <div>
        <div
          id="display"
          className="bg-black overflow-hidden p-8 text-white relative"
        >
          <pre className="h-6 text-center">
            <output>{displayValue}</output>
          </pre>
        </div>
        <div className="flex items-center justify-center flex-wrap">
          {SOUND_DATA.map((sound) => {
            const { key, src, name } = sound;

            return (
              <span
                id={key}
                key={key}
                onClick={() => play(src, name, key)}
                className={
                  displayValue === name
                    ? "relative inline-block w-20 h-20 py-2 px-4 my-2 mx-1 overflow-hidden cursor-pointer playing drum-pad"
                    : "relative inline-block w-20 h-20 py-2 px-4 my-2 mx-1 overflow-hidden cursor-pointer drum-pad"
                }
              >
                <i className="text-white not-italic relative">{key}</i>
                <audio id={key} src={src} className="clip"></audio>
              </span>
            );
          })}
        </div>
      </div>
    </main>
  );
}
