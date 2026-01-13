"use client";

import { useEffect, useRef, useState } from "react";
import Horloge from "./Horloge";

export default function Menu() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().catch(() => setAutoplayBlocked(true));
  }, []);

  function resumePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    audio.play().catch(() => setAutoplayBlocked(true));
  }

  const audioSrc = encodeURI("/audio/teconociextended.mp3");

  return (
    <div className="flex flex-col items-center text-white ">
      <div className="menuonhover flex flex-row align-center justify-center gap-8 text-xl pt-8">
        <div className="itemmenu ">Médias</div>
        <div className="itemmenu ">Nous Rejoindre</div>
        <div className="itemmenu ">Nous Contacter</div>
        <div className="itemmenu ">Agenda</div>
      </div>
      <Horloge />
      <div>
        <figure className=" flex flex-col m-20 ">
          <figcaption className=" ">
            bxkq · PXLWYSE - Te Conoci (Extended):
          </figcaption>
          <audio ref={audioRef} controls autoPlay src={audioSrc}>
            <source src={audioSrc} type="audio/mpeg" />
          </audio>

          {autoplayBlocked && (
            <div className="mt-2">
              <button
                onClick={resumePlayback}
                className="px-3 py-1 bg-blue-600 rounded"
              >
                Activer le son
              </button>
            </div>
          )}
        </figure>
      </div>
    </div>
  );
}
