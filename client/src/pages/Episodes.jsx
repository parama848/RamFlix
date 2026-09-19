import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import EpisodeCard from "../components/EpisodeCard";

const API_URL = "http://localhost:8080/api/episodes";

const EPISODES_PER_PAGE = 10;

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // =========================================
  // FETCH EPISODES FROM SPRING BOOT
  // =========================================

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch episodes (${response.status})`
          );
        }

        const result = await response.json();

        console.log("Episodes API response:", result);

        /*
         * Backend response:
         *
         * {
         *   status: 200,
         *   message: "...",
         *   data: [...]
         * }
         *
         * We need only result.data
         */

        setEpisodes(result);

      } catch (error) {
        console.error("Failed to load episodes:", error);

        setError(
          "Unable to load episodes. Please make sure the backend is running."
        );

      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);


  // =========================================
  // PAGINATION
  // =========================================

  const totalPages = Math.ceil(
    episodes.length / EPISODES_PER_PAGE
  );


  const startIndex =
    (currentPage - 1) * EPISODES_PER_PAGE;


  const currentEpisodes = episodes.slice(
    startIndex,
    startIndex + EPISODES_PER_PAGE
  );


  // =========================================
  // SCROLL TO TOP
  // =========================================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);


  // =========================================
  // GO TO PAGE
  // =========================================

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
  };


  // =========================================
  // LOADING UI
  // =========================================

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">

        <div className="relative z-30">
          <Navbar />
        </div>

        <main className="flex min-h-[70vh] items-center justify-center">

          <div className="text-center">

            <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-zinc-700 border-t-amber-500" />

            <p className="text-sm text-zinc-400">
              Loading episodes...
            </p>

          </div>

        </main>

      </div>
    );
  }


  // =========================================
  // ERROR UI
  // =========================================

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white">

        <div className="relative z-30">
          <Navbar />
        </div>

        <main className="flex min-h-[70vh] items-center justify-center px-6">

          <div className="max-w-md rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">

            <h2 className="text-xl font-bold text-white">
              Unable to load episodes
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {error}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-lg bg-amber-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-400"
            >
              Try Again
            </button>

          </div>

        </main>

      </div>
    );
  }


  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* =========================================
          CINEMATIC BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {/* Right Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/95
            via-black/30
            to-transparent
          "
        />

        {/* Overall subtle darkness */}

        <div className="absolute inset-0 bg-black/10" />

        {/* Bottom Gradient */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-72
            bg-gradient-to-t
            from-black
            via-black/30
            to-transparent
          "
        />

        {/* Main dark overlay */}

        <div className="absolute inset-0 bg-black/55" />

        {/* Top cinematic fade */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[320px]
            bg-gradient-to-b
            from-black
            via-black/70
            to-transparent
          "
        />

        {/* Bottom cinematic fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[450px]
            bg-gradient-to-t
            from-black
            via-black/70
            to-transparent
          "
        />

        {/* Left dark gradient */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[55%]
            bg-gradient-to-r
            from-black/75
            via-black/35
            to-transparent
          "
        />

        {/* Cinematic vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]
          "
        />

      </div>


      {/* =========================================
          NAVBAR
      ========================================= */}

      <div className="relative z-30">
        <Navbar />
      </div>


      {/* =========================================
          PAGE CONTENT
      ========================================= */}

      <main
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-24
          pt-32
          lg:px-8
        "
      >

        {/* =========================================
            HEADER
        ========================================= */}

        <section className="max-w-3xl">

          <div className="flex items-center gap-4">

            <span className="h-[2px] w-12 bg-amber-500" />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.35em]
                text-amber-400
              "
            >
              RamFlix Library
            </p>

          </div>


          <h1
            className="
              mt-5
              text-5xl
              font-black
              tracking-[-0.04em]
              text-white
              sm:text-6xl
              lg:text-7xl
            "
          >
            Episodes
          </h1>


          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-zinc-300
              sm:text-lg
            "
          >
            Explore the timeless journey of Ramayanam through
            every episode, from its beginning to the epic journey
            of Rama.
          </p>


          {/* Metadata */}

          <div className="mt-7 flex items-center gap-4 text-sm text-zinc-500">

            <span>
              {episodes.length} Episodes
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-600" />

            <span>
              RamFlix Original
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-600" />

            <span className="font-semibold text-amber-400">
              Epic
            </span>

          </div>

        </section>


        {/* =========================================
            EPISODES SECTION
        ========================================= */}

        <section className="mt-20">

          {/* Section Header */}

          <div className="flex items-end justify-between">

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-amber-400
                "
              >
                The Journey Continues
              </p>


              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                All Episodes
              </h2>


              {episodes.length > 0 && (
                <p className="mt-2 text-sm text-zinc-500">

                  Showing{" "}

                  {startIndex + 1}

                  -

                  {Math.min(
                    startIndex + EPISODES_PER_PAGE,
                    episodes.length
                  )}

                  {" "}of{" "}

                  {episodes.length}

                  {" "}episodes

                </p>
              )}

            </div>


            {/* Back button */}

            <Link
              to="/"
              className="
                hidden
                rounded-xl
                border
                border-white/10
                bg-black/40
                px-5
                py-3
                text-sm
                font-medium
                text-zinc-300
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-amber-500/40
                hover:bg-amber-500
                hover:text-black
                sm:inline-flex
              "
            >
              Back to Home
            </Link>

          </div>


          {/* =========================================
              NO EPISODES
          ========================================= */}

          {episodes.length === 0 ? (

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">

              <h3 className="text-xl font-bold text-white">
                No episodes available
              </h3>

              <p className="mt-3 text-sm text-zinc-500">
                There are currently no episodes available.
              </p>

            </div>

          ) : (

            <>
              {/* =========================================
                  EPISODE GRID
              ========================================= */}

              <div
                className="
                  mt-8
                  grid
                  grid-cols-1
                  gap-x-6
                  gap-y-10
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                "
              >

                {currentEpisodes.map((episode) => (

                  <EpisodeCard
                    key={episode.id}
                    episode={episode}
                  />

                ))}

              </div>


              {/* =========================================
                  PAGINATION
              ========================================= */}

              {totalPages > 1 && (

                <div className="mt-14 flex flex-col items-center gap-5">

                  {/* Page information */}

                  <p className="text-sm text-zinc-500">

                    Page{" "}

                    <span className="font-semibold text-white">
                      {currentPage}
                    </span>

                    {" "}of{" "}

                    <span className="font-semibold text-white">
                      {totalPages}
                    </span>

                  </p>


                  {/* Pagination controls */}

                  <div className="flex items-center gap-2">

                    {/* Previous */}

                    <button
                      type="button"
                      onClick={() =>
                        goToPage(currentPage - 1)
                      }
                      disabled={currentPage === 1}
                      className="
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        text-zinc-300
                        transition
                        hover:border-amber-500/40
                        hover:bg-amber-500
                        hover:text-black
                        disabled:cursor-not-allowed
                        disabled:opacity-30
                        disabled:hover:border-white/10
                        disabled:hover:bg-white/[0.03]
                        disabled:hover:text-zinc-300
                      "
                    >
                      ← Previous
                    </button>


                    {/* Page Numbers */}

                    <div className="hidden items-center gap-2 sm:flex">

                      {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1
                      ).map((page) => {

                        const shouldShow =
                          page === 1 ||
                          page === totalPages ||
                          Math.abs(page - currentPage) <= 2;


                        if (!shouldShow) {

                          if (
                            page === currentPage - 3 ||
                            page === currentPage + 3
                          ) {

                            return (
                              <span
                                key={page}
                                className="px-1 text-zinc-600"
                              >
                                ...
                              </span>
                            );

                          }

                          return null;
                        }


                        return (
                          <button
                            key={page}
                            type="button"
                            onClick={() =>
                              goToPage(page)
                            }
                            className={`
                              flex
                              h-10
                              min-w-10
                              items-center
                              justify-center
                              rounded-lg
                              border
                              px-3
                              text-sm
                              font-semibold
                              transition

                              ${
                                currentPage === page
                                  ? `
                                    border-amber-500
                                    bg-amber-500
                                    text-black
                                  `
                                  : `
                                    border-white/10
                                    bg-white/[0.03]
                                    text-zinc-400
                                    hover:border-amber-500/40
                                    hover:bg-amber-500
                                    hover:text-black
                                  `
                              }
                            `}
                          >
                            {page}
                          </button>
                        );

                      })}

                    </div>


                    {/* Mobile page number */}

                    <div
                      className="
                        flex
                        h-10
                        items-center
                        rounded-lg
                        border
                        border-amber-500
                        bg-amber-500
                        px-4
                        text-sm
                        font-semibold
                        text-black
                        sm:hidden
                      "
                    >
                      {currentPage}
                    </div>


                    {/* Next */}

                    <button
                      type="button"
                      onClick={() =>
                        goToPage(currentPage + 1)
                      }
                      disabled={currentPage === totalPages}
                      className="
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        text-zinc-300
                        transition
                        hover:border-amber-500/40
                        hover:bg-amber-500
                        hover:text-black
                        disabled:cursor-not-allowed
                        disabled:opacity-30
                        disabled:hover:border-white/10
                        disabled:hover:bg-white/[0.03]
                        disabled:hover:text-zinc-300
                      "
                    >
                      Next →
                    </button>

                  </div>

                </div>

              )}

            </>

          )}

        </section>


        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <section
          className="
            relative
            mt-24
            max-w-3xl
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black/60
            p-8
            backdrop-blur-xl
            sm:p-10
          "
        >

          {/* Golden glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-amber-500/10
              blur-3xl
            "
          />


          <div className="relative">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-amber-500
              "
            >
              RamFlix
            </p>


            <h2
              className="
                mt-3
                text-2xl
                font-bold
                tracking-tight
                text-white
                sm:text-3xl
              "
            >
              The epic lives on.
            </h2>


            <p
              className="
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-zinc-400
              "
            >
              Continue your journey through the timeless story
              of Rama, Sita, Lakshmana and Hanuman.
            </p>


            <Link
              to="/"
              className="
                mt-6
                inline-flex
                items-center
                rounded-lg
                bg-amber-500
                px-5
                py-3
                text-sm
                font-bold
                text-black
                transition-all
                duration-300
                hover:bg-amber-400
                hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]
              "
            >
              Back to Home
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Episodes;