import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background Image */}
      <div className="absolute inset-0">

        <img
          src="/images/hero/ramayana-hero.png"
          alt="Ramayanam"
          className="h-full ml-60 mt-10 w-full object-cover object-center"
        />

        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

        {/* Overall subtle darkness */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/60 to-transparent" />

      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 lg:px-8">

        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">

            <span className="h-px w-10 bg-amber-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              The Timeless Epic
            </span>

          </div>

          {/* Title */}
          <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Ramayanam
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
            Experience the timeless journey of Rama, Sita, Lakshmana and
            Hanuman — a story of courage, devotion, dharma and sacrifice.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            {/* Watch Now */}
            <Link to="/episodes">
             <button
              type="button"
              className="flex hover items-center gap-3 rounded-lg bg-amber-500 px-7 py-3.5 font-semibold text-black transition duration-200 hover:bg-amber-400"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5.14v13.72c0 .78.85 1.26 1.52.86l10.2-6.86a1 1 0 0 0 0-1.72L9.52 4.28C8.85 3.88 8 4.36 8 5.14Z" />
              </svg>

              Watch Now
            </button>
            </Link>
           

            {/* More Info */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-200 hover:bg-white/20"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                />

                <path
                  strokeLinecap="round"
                  d="M12 11v5"
                />

                <path
                  strokeLinecap="round"
                  d="M12 8h.01"
                />
              </svg>

              More Info
            </button>

          </div>

          {/* Metadata */}
          <div className="mt-9 flex flex-wrap items-center gap-4 text-sm text-zinc-300">

            <span>10 Episodes</span>

            <span className="h-1 w-1 rounded-full bg-zinc-500" />

            <span>RamFlix Original</span>

            <span className="h-1 w-1 rounded-full bg-zinc-500" />

            <span className="text-amber-400">
              Epic
            </span>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;