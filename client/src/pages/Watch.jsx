import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";
import EpisodeCard from "../components/EpisodeCard";
import RamflixIntro from "../components/RamflixIntro";


const API_URL = "http://localhost:8080/api";


const Watch = () => {

  const { id } = useParams();


  // ==========================================
  // STATE
  // ==========================================

  const [episode, setEpisode] = useState(null);

  const [episodes, setEpisodes] = useState([]);

  const [showIntro, setShowIntro] = useState(true);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // ==========================================
  // FETCH EPISODE
  // ==========================================

  useEffect(() => {

    const fetchEpisode = async () => {

      try {

        setLoading(true);
        setError("");

        /*
         * Fetch selected episode
         *
         * GET
         * /api/episode/{id}
         */

        const episodeResponse = await fetch(
          `${API_URL}/episode/${id}`
        );


        if (!episodeResponse.ok) {

          throw new Error(
            `Episode not found (${episodeResponse.status})`
          );

        }


        const episodeResult =
          await episodeResponse.json();


        console.log(
          "Episode API response:",
          episodeResult
        );


        /*
         * This supports both:
         *
         * 1. EpisodeResponse directly
         *
         * {
         *   id: 1,
         *   title: "Episode 1"
         * }
         *
         * 2. ApiResponse<EpisodeResponse>
         *
         * {
         *   status: 200,
         *   message: "...",
         *   data: {
         *      id: 1,
         *      title: "Episode 1"
         *   }
         * }
         */

        const episodeData =
          episodeResult.data ??
          episodeResult;


        setEpisode(episodeData);


        // ======================================
        // FETCH ALL EPISODES
        // ======================================

        const allEpisodesResponse =
          await fetch(
            `${API_URL}/episodes`
          );


        if (allEpisodesResponse.ok) {

          const allEpisodesResult =
            await allEpisodesResponse.json();


          console.log(
            "All episodes API response:",
            allEpisodesResult
          );


          /*
           * Supports both:
           *
           * List<EpisodeResponse>
           *
           * OR
           *
           * ApiResponse<List<EpisodeResponse>>
           */

          const allEpisodes =
            allEpisodesResult.data ??
            allEpisodesResult;


          setEpisodes(
            Array.isArray(allEpisodes)
              ? allEpisodes
              : []
          );

        }

      } catch (error) {

        console.error(
          "Failed to load episode:",
          error
        );

        setError(
          "Unable to load this episode."
        );

      } finally {

        setLoading(false);

      }

    };


    fetchEpisode();

  }, [id]);


  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {

    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#080808]
          text-white
        "
      >

        <div className="text-center">

          <div
            className="
              mx-auto
              mb-5
              h-10
              w-10
              animate-spin
              rounded-full
              border-2
              border-zinc-700
              border-t-amber-500
            "
          />

          <p className="text-sm text-zinc-500">
            Loading episode...
          </p>

        </div>

      </div>
    );

  }


  // ==========================================
  // ERROR
  // ==========================================

  if (error || !episode) {

    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#080808]
          px-6
          text-white
        "
      >

        <div className="text-center">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-amber-500
            "
          >
            RamFlix
          </p>


          <h1 className="mt-3 text-3xl font-bold">
            Episode Not Found
          </h1>


          <p className="mt-2 text-zinc-500">
            {error ||
              "The episode you're looking for doesn't exist."}
          </p>


          <Link
            to="/episodes"
            className="
              mt-6
              inline-flex
              rounded-lg
              bg-amber-500
              px-6
              py-3
              font-semibold
              text-black
              transition
              hover:bg-amber-400
            "
          >
            Browse Episodes
          </Link>

        </div>

      </div>
    );

  }


  // ==========================================
  // FIND NEXT EPISODE
  // ==========================================

  const nextEpisode =
    episodes.find(
      (item) =>
        item.episodeNumber ===
        episode.episodeNumber + 1
    );


  // ==========================================
  // SHOW RAMFLIX INTRO
  // ==========================================

  if (showIntro) {

    return (
      <RamflixIntro
        onComplete={() => {
          setShowIntro(false);
        }}
      />
    );

  }


  // ==========================================
  // MAIN WATCH PAGE
  // ==========================================

  return (

    <div
      className="
        min-h-screen
        bg-[#080808]
        text-white
      "
    >

      {/* ======================================
          NAVBAR
      ====================================== */}

      <Navbar />


      <main
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-4
          pb-20
          pt-28
          sm:px-6
          lg:px-10
        "
      >

        {/* ====================================
            BREADCRUMB
        ==================================== */}

        <div
          className="
            mb-6
            flex
            items-center
            gap-2
            text-sm
            text-zinc-500
          "
        >

          <Link
            to="/"
            className="
              transition-colors
              hover:text-amber-400
            "
          >
            Home
          </Link>


          <span className="text-zinc-700">
            /
          </span>


          <Link
            to="/episodes"
            className="
              transition-colors
              hover:text-amber-400
            "
          >
            Episodes
          </Link>


          <span className="text-zinc-700">
            /
          </span>


          <span className="text-zinc-300">
            {episode.title}
          </span>

        </div>


        {/* ====================================
            VIDEO PLAYER
        ==================================== */}

        <VideoPlayer
          video={episode.video}
          title={episode.title}
          playback={episode.playback}
          introCompleted={true}
        />


        {/* ====================================
            UP NEXT
        ==================================== */}

        {nextEpisode && (

          <section
            className="
              mx-auto
              mt-14
              max-w-[1200px]
            "
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-gradient-to-r
                from-amber-500/[0.08]
                via-white/[0.03]
                to-transparent
                p-5
                sm:p-6
              "
            >

              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-amber-500/10
                  blur-3xl
                "
              />


              <div
                className="
                  relative
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <div>

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-amber-500
                    "
                  >
                    Up Next
                  </p>


                  <h2
                    className="
                      mt-2
                      text-xl
                      font-bold
                      text-white
                      sm:text-2xl
                    "
                  >
                    {nextEpisode.title}
                  </h2>


                  <p
                    className="
                      mt-1
                      text-sm
                      text-zinc-500
                    "
                  >
                    Continue your Ramayanam journey.
                  </p>

                </div>


                <Link
                  to={`/watch/${nextEpisode.id}`}
                  className="
                    inline-flex
                    items-center
                    justify-center
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
                    hover:shadow-lg
                    hover:shadow-amber-500/20
                  "
                >
                  Watch Next
                </Link>

              </div>

            </div>

          </section>

        )}


        {/* ====================================
            MORE EPISODES
        ==================================== */}

        <section
          className="
            mx-auto
            mt-16
            max-w-[1200px]
          "
        >

          <div
            className="
              flex
              items-end
              justify-between
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-amber-500
                "
              >
                The Journey Continues
              </p>


              <h2
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-white
                  sm:text-3xl
                "
              >
                More Episodes
              </h2>

            </div>


            <Link
              to="/episodes"
              className="
                hidden
                text-sm
                font-medium
                text-zinc-400
                transition-colors
                hover:text-amber-400
                sm:block
              "
            >
              View All
            </Link>

          </div>


          {/* ==================================
              EPISODE LIST
          ================================== */}

          <div
            className="
              mt-7
              flex
              gap-5
              overflow-x-auto
              pb-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {episodes.map((item) => (

              <div
                key={item.id}
                className="
                  w-[280px]
                  flex-none
                  sm:w-[320px]
                "
              >

                <EpisodeCard
                  episode={item}
                  currentEpisode={episode.id}
                />

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>

  );

};


export default Watch;