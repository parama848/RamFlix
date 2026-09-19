import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/80">

      {/* Top golden glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          -top-px
          h-px
          bg-gradient-to-r
          from-transparent
          via-amber-500/60
          to-transparent
        "
      />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* =========================================
            MAIN FOOTER
        ========================================= */}

        <div
          className="
            flex
            flex-col
            gap-10
            md:flex-row
            md:items-start
            md:justify-between
          "
        >

          {/* =====================================
              BRAND
          ===================================== */}

          <div className="max-w-sm">

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

              <img
                src="/images/logo.png"
                alt="RamFlix"
                className="
                  h-11
                  w-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div>

                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-amber-500
                  "
                >
                  The Epic Lives On
                </p>

              </div>

            </Link>

            <p
              className="
                mt-5
                text-sm
                leading-6
                text-zinc-500
              "
            >
              Experience the timeless journey of Ramayanam,
              one episode at a time.
            </p>

          </div>

          {/* =====================================
              NAVIGATION
          ===================================== */}

          <div className="flex gap-16">

            {/* Explore */}

            <div>

              <h4
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-zinc-300
                "
              >
                Explore
              </h4>

              <div className="mt-4 flex flex-col gap-3">

                <Link
                  to="/"
                  className="
                    text-sm
                    text-zinc-500
                    transition
                    duration-300
                    hover:text-amber-400
                  "
                >
                  Home
                </Link>

                <Link
                  to="/episodes"
                  className="
                    text-sm
                    text-zinc-500
                    transition
                    duration-300
                    hover:text-amber-400
                  "
                >
                  Episodes
                </Link>

              </div>

            </div>

            {/* RamFlix */}

            <div>

              <h4
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-zinc-300
                "
              >
                RamFlix
              </h4>

              <div className="mt-4 flex flex-col gap-3">

                <span className="text-sm text-zinc-500">
                  Ramayanam
                </span>

                <span className="text-sm text-zinc-500">
                  The Epic Journey
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =========================================
            DIVIDER
        ========================================= */}

        <div className="my-8 h-px bg-white/10" />

        {/* =========================================
            BOTTOM
        ========================================= */}

        <div
          className="
            flex
            flex-col
            gap-3
            text-xs
            text-zinc-600
            sm:flex-row
            sm:items-center
           
            sm:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} RamFlix.
            All rights reserved.
          </p>

          <p className="text-zinc-700">
            The epic lives on.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;