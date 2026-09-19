import { useEffect, useRef } from "react";

const RamflixIntro = ({ onComplete }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.7;

      audio.play().catch(() => {
        // Browser may block autoplay.
      });
    }

    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [onComplete]);

  return (
    <div className="ramflix-intro">

      {/* Intro sound */}
      <audio
        ref={audioRef}
        src="/sounds/ramflix-intro.mp3"
        preload="auto"
      />

      {/* Ambient golden glow */}
      <div className="ramflix-glow" />

      {/* Light sweep */}
      <div className="ramflix-sweep" />

      {/* Floating particles */}
      <div className="ramflix-particles">
        {Array.from({ length: 14 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      {/* RamFlix logo */}
      <div className="ramflix-brand">

        <img
          src="/images/logo.png"
          alt="RamFlix"
          className="ramflix-image-logo"
        />

         <div className="ramflix-line" /> 

        {/*<div className="ramflix-tagline">
          THE EPIC LIVES ON
        </div> */}

      </div>

    </div>
  );
};

export default RamflixIntro;