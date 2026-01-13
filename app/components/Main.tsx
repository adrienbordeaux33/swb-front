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
    <div className="relative flex h-screen justify-center items-center space-between text-white overflow-hidden">
      <div className="absolute inset-0  bg-[url('/logo-swb-png.png')] bg-center bg-cover opacity-40 pointer-events-none" />
      <div className="flex flex-col h-full items-center justify-center p-4 rounded-xl ">
        {/* <div className=" p-2">
        <Connexion />
      </div> */}

        <div className="menuonhover flex flex-row align-center justify-center gap-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-8">
          <div
            className="itemmenu size-48 rounded-full 
           "
          >
            Médias
          </div>
          <div className="itemmenu ">Nous Rejoindre</div>
          <div className="itemmenu ">Nous Contacter</div>
          <div className="itemmenu ">Agenda</div>
        </div>
        {/* <Horloge /> */}
        <div>
          <figure className="flex flex-col m-20 opacity-80">
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
                  className="px-3 py-1 bg-blue-600 rounded opacity-80"
                >
                  Activer le son
                </button>
              </div>
            )}
          </figure>
        </div>
        <div className="flex text-white items-center justify-center opacity-80">
          2014 SWB, Association Sportive loi 1901
        </div>
      </div>
    </div>
  );
}
