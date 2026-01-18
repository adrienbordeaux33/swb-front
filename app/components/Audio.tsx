import { useEffect, useRef, useState } from "react";

export default function Audio() {
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
    <div>
      <figure className="flex flex-col opacity-80">
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
  );
}
