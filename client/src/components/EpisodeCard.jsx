import { Link } from "react-router-dom";

import {
  Play,
  Clock3,
  ChevronRight,
} from "lucide-react";


const EpisodeCard = ({
  episode,
  currentEpisode,
}) => {

  const isCurrent =
    currentEpisode === episode.id;


  return (
    <Link
      to={`/watch/${episode.id}`}
      className="group relative block"
    >

      {/* ========================================
          CARD
      ======================================== */}

      <article
        className={`
          relative
          overflow-hidden
          rounded-2xl
          border
          bg-[#0d0d0d]
          transition-all
          duration-500
          ease-out

          ${
            isCurrent
              ? `
                border-amber-500/50
                shadow-[0_0_35px_rgba(245,158,11,0.10)]
              `
              : `
                border-white/[0.08]
                hover:-translate-y-1
                hover:border-amber-500/30
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
              `
          }
        `}
      >

        {/* ====================================
            GOLDEN HOVER GLOW
        ==================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-10
            z-0
            rounded-full
            bg-amber-500/[0.07]
            opacity-0
            blur-3xl
            transition-opacity
            duration-700
            group-hover:opacity-100
          "
        />


        {/* ====================================
            THUMBNAIL
        ==================================== */}

        <div
          className="
            relative
            z-10
            aspect-video
            overflow-hidden
          "
        >

          <img
            src={episode.thumbnail}
            alt={episode.title}
            loading="lazy"
            className="
              h-full
              w-full
              object-cover

              transition-transform
              duration-700
              ease-out

              group-hover:scale-[1.06]
            "
          />


          {/* Dark cinematic gradient */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/10
              to-transparent
              opacity-90
            "
          />


          {/* Subtle hover overlay */}

          <div
            className="
              absolute
              inset-0
              bg-black/20
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />


          {/* ==================================
              EPISODE NUMBER
          ================================== */}

          <div
            className="
              absolute
              left-3
              top-3
              flex
              items-center
              gap-1.5
              rounded-lg
              border
              border-white/10
              bg-black/60
              px-2.5
              py-1.5
              text-[11px]
              font-semibold
              uppercase
              tracking-wider
              text-white
              backdrop-blur-md
            "
          >

            <span className="text-amber-400">
              EP
            </span>

            <span>
              {String(
                episode.episodeNumber
              ).padStart(2, "0")}
            </span>

          </div>


          {/* ==================================
              DURATION
          ================================== */}

          <div
            className="
              absolute
              right-3
              top-3
              flex
              items-center
              gap-1.5
              rounded-lg
              border
              border-white/10
              bg-black/60
              px-2.5
              py-1.5
              text-[11px]
              font-medium
              text-zinc-200
              backdrop-blur-md
            "
          >

            <Clock3 size={12} />

            {episode.duration}

          </div>


          {/* ==================================
              PLAY BUTTON
          ================================== */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full

                border
                border-white/30

                bg-white/15
                text-white

                opacity-0
                scale-75

                shadow-[0_0_30px_rgba(245,158,11,0.25)]

                backdrop-blur-md

                transition-all
                duration-500
                ease-out

                group-hover:scale-100
                group-hover:opacity-100

                group-hover:border-amber-400/60
                group-hover:bg-amber-500
                group-hover:text-black
              "
            >

              <Play
                size={22}
                fill="currentColor"
                className="ml-0.5"
              />

            </div>

          </div>


          {/* ==================================
              BOTTOM STATUS
          ================================== */}

          {isCurrent && (

            <div
              className="
                absolute
                bottom-3
                left-3
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-amber-400/20
                bg-black/70
                px-2.5
                py-1.5
                backdrop-blur-md
              "
            >

              {/* Animated indicator */}

              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                "
              >

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-amber-400
                    opacity-75
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-amber-500
                  "
                />

              </span>


              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-amber-400
                "
              >
                Now Playing
              </span>

            </div>

          )}

        </div>


        {/* ========================================
            CARD CONTENT
        ======================================== */}

        <div
          className="
            relative
            z-10
            p-4
            sm:p-5
          "
        >

          {/* Title row */}

          <div
            className="
              flex
              items-start
              justify-between
              gap-3
            "
          >

            <div className="min-w-0">

              <p
                className="
                  mb-1
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-amber-500/80
                "
              >
                RamFlix Original
              </p>


              <h3
                className="
                  truncate
                  text-base
                  font-bold
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-amber-400
                "
              >
                {episode.title}
              </h3>

            </div>


            {/* Arrow */}

            <div
              className="
                mt-1
                flex
                h-7
                w-7
                flex-none
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-zinc-500

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:border-amber-500/30
                group-hover:bg-amber-500
                group-hover:text-black
              "
            >

              <ChevronRight size={15} />

            </div>

          </div>


          {/* Description */}

          <p
            className="
              mt-2
              line-clamp-2
              text-xs
              leading-relaxed
              text-zinc-500
              transition-colors
              duration-300
              group-hover:text-zinc-400
            "
          >
            {episode.description}
          </p>

        </div>


        {/* ========================================
            BOTTOM GOLD LINE
        ======================================== */}

        <div
          className={`
            absolute
            bottom-0
            left-0
            h-[2px]
            bg-gradient-to-r
            from-amber-500
            via-amber-300
            to-transparent

            transition-all
            duration-500

            ${
              isCurrent
                ? "w-full opacity-100"
                : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
            }
          `}
        />

      </article>

    </Link>
  );
};


export default EpisodeCard;