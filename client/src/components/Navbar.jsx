// // import { NavLink } from "react-router-dom";
// // import { useState } from "react";
// // import logo from "/images/logo.png";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const navLinkClass = ({ isActive }) =>
// //     `text-sm font-medium transition-colors ${
// //       isActive
// //         ? "text-white"
// //         : "text-zinc-400 hover:text-white"
// //     }`;

// //   return (
// //     <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

// //       <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

// //         {/* Logo */}
// //         <NavLink
// //   to="/"
// //   className="group relative flex items-center gap-3"
// // >
// //   {/* Golden glow behind logo */}
// //   <span
// //     className="
// //       pointer-events-none
// //       absolute
// //       left-1/2
// //       top-1/2
// //       h-12
// //       w-40
// //       -translate-x-1/2
// //       -translate-y-1/2
// //       rounded-full
// //       bg-[#f5b335]
// //       opacity-0
// //       blur-2xl
// //       transition-all
// //       duration-500
// //       ease-out
// //       group-hover:opacity-60
// //       group-hover:scale-110
// //     "
// //   />

// //   {/* Logo */}
// //   <img
// //     className="
// //       relative
// //       z-10
// //       h-auto
// //       w-44
// //       transition-transform
// //       duration-500
// //       ease-out
// //       group-hover:scale-[1.03]
// //     "
// //     src={logo}
// //     alt="RamFlix"
// //   />
// // </NavLink>

// //         {/* Desktop Navigation */}
// //         <div className="hidden items-center gap-10 md:flex">

// //           <NavLink
// //             to="/"
// //             className={navLinkClass}
// //           >
// //             Home
// //           </NavLink>

// //           <NavLink
// //             to="/episodes"
// //             className={navLinkClass}
// //           >
// //             Episodes
// //           </NavLink>

// //           <NavLink
// //             to="/about"
// //             className={navLinkClass}
// //           >
// //             About
// //           </NavLink>

// //         </div>

// //         {/* Right Actions */}
// //         <div className="hidden items-center gap-4 md:flex">

// //           {/* Search */}
// //           <button
// //             type="button"
// //             aria-label="Search"
// //             className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white"
// //           >
// //             <svg
// //               className="h-5 w-5"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="1.8"
// //             >
// //               <circle cx="11" cy="11" r="6.5" />
// //               <path
// //                 strokeLinecap="round"
// //                 d="m16 16 5 5"
// //               />
// //             </svg>
// //           </button>

// //           <button
// //             type="button"
// //             className="px-3 py-2 text-sm font-medium text-zinc-300 transition hover:text-white"
// //           >
// //             Sign In
// //           </button>

// //           <button
// //             type="button"
// //             className="rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-400"
// //           >
// //             Get Started
// //           </button>

// //         </div>

// //         {/* Mobile Menu Button */}
// //         <button
// //           type="button"
// //           onClick={() => setMenuOpen((value) => !value)}
// //           className="rounded-lg p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white md:hidden"
// //           aria-label="Toggle navigation"
// //         >
// //           {menuOpen ? (
// //             <svg
// //               className="h-6 w-6"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="1.8"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 d="M6 6l12 12M18 6 6 18"
// //               />
// //             </svg>
// //           ) : (
// //             <svg
// //               className="h-6 w-6"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="1.8"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 d="M4 6h16M4 12h16M4 18h16"
// //               />
// //             </svg>
// //           )}
// //         </button>

// //       </nav>

// //       {/* Mobile Navigation */}
// //       {menuOpen && (
// //         <div className="border-t border-white/10 bg-black/95 md:hidden">

// //           <div className="mx-auto max-w-7xl px-6 py-5">

// //             <div className="flex flex-col gap-2">

// //               <NavLink
// //                 to="/"
// //                 onClick={() => setMenuOpen(false)}
// //                 className={navLinkClass}
// //               >
// //                 Home
// //               </NavLink>

// //               <NavLink
// //                 to="/episodes"
// //                 onClick={() => setMenuOpen(false)}
// //                 className={navLinkClass}
// //               >
// //                 Episodes
// //               </NavLink>

// //               <NavLink
// //                 to="/about"
// //                 onClick={() => setMenuOpen(false)}
// //                 className={navLinkClass}
// //               >
// //                 About
// //               </NavLink>

// //             </div>

// //           </div>

// //         </div>
// //       )}

// //     </header>
// //   );
// // };

// // export default Navbar;

// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import logo from "/images/logo.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinkClass = ({ isActive }) =>
//     `
//       group relative
//       flex items-center
//       py-2
//       text-[13px]
//       font-medium
//       tracking-wide
//       transition-all
//       duration-300
//       ${
//         isActive
//           ? "text-white"
//           : "text-zinc-400 hover:text-white"
//       }
//     `;

//   return (
//     <header
//       className="
//         fixed
//         inset-x-0
//         top-0
//         z-50
//         border-b
//         border-white/[0.06]
//         bg-black/70
//         backdrop-blur-2xl
//       "
//     >

//       {/* =========================================
//           TOP GOLDEN LINE
//       ========================================= */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-x-0
//           top-0
//           h-px
//           bg-gradient-to-r
//           from-transparent
//           via-[#f5b335]/50
//           to-transparent
//         "
//       />

//       <nav
//         className="
//           mx-auto
//           flex
//           h-[76px]
//           max-w-7xl
//           items-center
//           justify-between
//           px-6
//           lg:px-8
//         "
//       >

//         {/* =========================================
//             LOGO
//         ========================================= */}

//         <NavLink
//           to="/"
//           className="
//             group
//             relative
//             flex
//             items-center
//           "
//         >

//           {/* Cinematic glow */}

//           <span
//             className="
//               pointer-events-none
//               absolute
//               left-1/2
//               top-1/2
//               h-10
//               w-36
//               -translate-x-1/2
//               -translate-y-1/2
//               rounded-full
//               bg-[#f5b335]
//               opacity-0
//               blur-2xl
//               transition-all
//               duration-500
//               ease-out
//               group-hover:scale-125
//               group-hover:opacity-40
//             "
//           />

//           {/* Logo */}

//           <img
//             src={logo}
//             alt="RamFlix"
//             className="
//               relative
//               z-10
//               h-auto
//               w-44
//               transition-transform
//               duration-500
//               ease-out
//               group-hover:scale-[1.035]
//             "
//           />

//         </NavLink>

//         {/* =========================================
//             DESKTOP NAVIGATION
//         ========================================= */}

//         <div
//           className="
//             hidden
//             items-center
//             gap-9
//             md:flex
//           "
//         >

//           <NavLink
//             to="/"
//             className={navLinkClass}
//           >
//             {({ isActive }) => (
//               <>
//                 Home

//                 <span
//                   className={`
//                     absolute
//                     -bottom-[17px]
//                     left-1/2
//                     h-[2px]
//                     -translate-x-1/2
//                     rounded-full
//                     bg-[#f5b335]
//                     transition-all
//                     duration-300
//                     ${
//                       isActive
//                         ? "w-5 opacity-100"
//                         : "w-0 opacity-0"
//                     }
//                   `}
//                 />
//               </>
//             )}
//           </NavLink>

//           <NavLink
//             to="/episodes"
//             className={navLinkClass}
//           >
//             {({ isActive }) => (
//               <>
//                 Episodes

//                 <span
//                   className={`
//                     absolute
//                     -bottom-[17px]
//                     left-1/2
//                     h-[2px]
//                     -translate-x-1/2
//                     rounded-full
//                     bg-[#f5b335]
//                     transition-all
//                     duration-300
//                     ${
//                       isActive
//                         ? "w-5 opacity-100"
//                         : "w-0 opacity-0"
//                     }
//                   `}
//                 />
//               </>
//             )}
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={navLinkClass}
//           >
//             {({ isActive }) => (
//               <>
//                 About

//                 <span
//                   className={`
//                     absolute
//                     -bottom-[17px]
//                     left-1/2
//                     h-[2px]
//                     -translate-x-1/2
//                     rounded-full
//                     bg-[#f5b335]
//                     transition-all
//                     duration-300
//                     ${
//                       isActive
//                         ? "w-5 opacity-100"
//                         : "w-0 opacity-0"
//                     }
//                   `}
//                 />
//               </>
//             )}
//           </NavLink>

//         </div>

//         {/* =========================================
//             RIGHT ACTIONS
//         ========================================= */}

//         <div
//           className="
//             hidden
//             items-center
//             gap-2
//             md:flex
//           "
//         >

//           {/* Search */}

//           <button
//             type="button"
//             aria-label="Search"
//             className="
//               group
//               flex
//               h-10
//               w-10
//               items-center
//               justify-center
//               rounded-full
//               text-zinc-400
//               transition-all
//               duration-300
//               hover:bg-white/[0.06]
//               hover:text-[#f5b335]
//             "
//           >
//             <svg
//               className="
//                 h-[18px]
//                 w-[18px]
//                 transition-transform
//                 duration-300
//                 group-hover:scale-110
//               "
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.7"
//             >
//               <circle
//                 cx="11"
//                 cy="11"
//                 r="6.5"
//               />

//               <path
//                 strokeLinecap="round"
//                 d="m16 16 5 5"
//               />
//             </svg>
//           </button>

//           {/* Divider */}

//           <span className="mx-2 h-5 w-px bg-white/10" />

//           {/* Sign In */}

//           <button
//             type="button"
//             className="
//               rounded-lg
//               px-3
//               py-2
//               text-[13px]
//               font-medium
//               text-zinc-400
//               transition-all
//               duration-300
//               hover:text-white
//             "
//           >
//             Sign In
//           </button>

//           {/* Get Started */}

//           <button
//             type="button"
//             className="
//               group
//               relative
//               overflow-hidden
//               rounded-lg
//               bg-[#f5b335]
//               px-5
//               py-2.5
//               text-[13px]
//               font-bold
//               text-black
//               transition-all
//               duration-300
//               hover:bg-[#ffc85c]
//               hover:shadow-[0_0_25px_rgba(245,179,53,0.25)]
//             "
//           >
//             <span
//               className="
//                 relative
//                 z-10
//               "
//             >
//               Get Started
//             </span>

//             {/* Shine */}

//             <span
//               className="
//                 absolute
//                 inset-y-0
//                 -left-10
//                 w-8
//                 rotate-12
//                 bg-white/40
//                 blur-sm
//                 transition-all
//                 duration-700
//                 group-hover:left-[120%]
//               "
//             />
//           </button>

//         </div>

//         {/* =========================================
//             MOBILE MENU BUTTON
//         ========================================= */}

//         <button
//           type="button"
//           onClick={() =>
//             setMenuOpen((value) => !value)
//           }
//           className="
//             relative
//             z-50
//             flex
//             h-10
//             w-10
//             items-center
//             justify-center
//             rounded-lg
//             border
//             border-white/10
//             bg-white/[0.03]
//             text-zinc-300
//             transition-all
//             duration-300
//             hover:border-[#f5b335]/30
//             hover:text-[#f5b335]
//             md:hidden
//           "
//           aria-label="Toggle navigation"
//         >
//           {menuOpen ? (
//             <svg
//               className="h-5 w-5"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.8"
//             >
//               <path
//                 strokeLinecap="round"
//                 d="M6 6l12 12M18 6 6 18"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="h-5 w-5"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.8"
//             >
//               <path
//                 strokeLinecap="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>

//       </nav>

//       {/* =========================================
//           MOBILE NAVIGATION
//       ========================================= */}

//       <div
//         className={`
//           overflow-hidden
//           border-t
//           border-white/[0.06]
//           bg-black/95
//           backdrop-blur-2xl
//           transition-all
//           duration-300
//           md:hidden
//           ${
//             menuOpen
//               ? "max-h-[400px] opacity-100"
//               : "max-h-0 border-transparent opacity-0"
//           }
//         `}
//       >

//         <div className="mx-auto max-w-7xl px-6 py-5">

//           <div className="flex flex-col">

//             <NavLink
//               to="/"
//               onClick={() => setMenuOpen(false)}
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 border-b
//                 border-white/[0.06]
//                 py-4
//                 text-sm
//                 font-medium
//                 text-zinc-400
//                 transition
//                 hover:text-white
//               "
//             >
//               Home

//               <span className="text-zinc-700">
//                 →
//               </span>
//             </NavLink>

//             <NavLink
//               to="/episodes"
//               onClick={() => setMenuOpen(false)}
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 border-b
//                 border-white/[0.06]
//                 py-4
//                 text-sm
//                 font-medium
//                 text-zinc-400
//                 transition
//                 hover:text-white
//               "
//             >
//               Episodes

//               <span className="text-zinc-700">
//                 →
//               </span>
//             </NavLink>

//             <NavLink
//               to="/about"
//               onClick={() => setMenuOpen(false)}
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 py-4
//                 text-sm
//                 font-medium
//                 text-zinc-400
//                 transition
//                 hover:text-white
//               "
//             >
//               About

//               <span className="text-zinc-700">
//                 →
//               </span>
//             </NavLink>

//           </div>

//         </div>

//       </div>

//     </header>
//   );
// };

// export default Navbar;

import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  // ---------------------------------------------
  // Navigation link style
  // ---------------------------------------------

  const navLinkClass = ({ isActive }) =>
    `
      group relative
      flex items-center
      py-2
      text-[13px]
      font-medium
      tracking-wide
      transition-all
      duration-300
      ${
        isActive
          ? "text-white"
          : "text-zinc-400 hover:text-white"
      }
    `;

  // ---------------------------------------------
  // Logout
  // ---------------------------------------------

  const handleLogout = () => {
    logout();

    setMenuOpen(false);

    navigate("/");
  };

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-white/[0.06]
        bg-black/70
        backdrop-blur-2xl
      "
    >

      {/* =========================================
          TOP GOLDEN LINE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#f5b335]/50
          to-transparent
        "
      />

      <nav
        className="
          mx-auto
          flex
          h-[76px]
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >

        {/* =========================================
            LOGO
        ========================================= */}

        <Link
          to="/"
          className="
            group
            relative
            flex
            items-center
          "
        >

          {/* Cinematic glow */}

          <span
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-10
              w-36
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#f5b335]
              opacity-0
              blur-2xl
              transition-all
              duration-500
              ease-out
              group-hover:scale-125
              group-hover:opacity-40
            "
          />

          {/* Logo */}

          <img
            src={logo}
            alt="RamFlix"
            className="
              relative
              z-10
              h-auto
              w-44
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.035]
            "
          />

        </Link>


        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}

        <div
          className="
            hidden
            items-center
            gap-9
            md:flex
          "
        >

          {/* HOME */}

          <NavLink
            to="/"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                Home

                <span
                  className={`
                    absolute
                    -bottom-[17px]
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#f5b335]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </>
            )}
          </NavLink>


          {/* EPISODES */}

          <NavLink
            to="/episodes"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                Episodes

                <span
                  className={`
                    absolute
                    -bottom-[17px]
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#f5b335]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </>
            )}
          </NavLink>


          {/* ABOUT */}

          <NavLink
            to="/about"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                About

                <span
                  className={`
                    absolute
                    -bottom-[17px]
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#f5b335]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </>
            )}
          </NavLink>

        </div>


        {/* =========================================
            RIGHT ACTIONS
        ========================================= */}

        <div
          className="
            hidden
            items-center
            gap-2
            md:flex
          "
        >

          {/* Search */}

          <button
            type="button"
            aria-label="Search"
            className="
              group
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-zinc-400
              transition-all
              duration-300
              hover:bg-white/[0.06]
              hover:text-[#f5b335]
            "
          >
            <svg
              className="
                h-[18px]
                w-[18px]
                transition-transform
                duration-300
                group-hover:scale-110
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
              />

              <path
                strokeLinecap="round"
                d="m16 16 5 5"
              />
            </svg>
          </button>


          {/* Divider */}

          <span className="mx-2 h-5 w-px bg-white/10" />


          {/* =========================================
              LOGGED OUT
          ========================================= */}

          {!isAuthenticated && (
            <>
              {/* Sign In */}

              <Link
                to="/login"
                className="
                  rounded-lg
                  px-3
                  py-2
                  text-[13px]
                  font-medium
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                Sign In
              </Link>


              {/* Get Started */}

              <Link
                to="/register"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-lg
                  bg-[#f5b335]
                  px-5
                  py-2.5
                  text-[13px]
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#ffc85c]
                  hover:shadow-[0_0_25px_rgba(245,179,53,0.25)]
                "
              >

                <span className="relative z-10">
                  Get Started
                </span>

                {/* Shine */}

                <span
                  className="
                    absolute
                    inset-y-0
                    -left-10
                    w-8
                    rotate-12
                    bg-white/40
                    blur-sm
                    transition-all
                    duration-700
                    group-hover:left-[120%]
                  "
                />

              </Link>
            </>
          )}


          {/* =========================================
              LOGGED IN
          ========================================= */}

          {isAuthenticated && (
            <>

              {/* User */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  px-3
                  py-2
                "
              >

                {/* Avatar */}

                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#f5b335]/30
                    bg-[#f5b335]/10
                    text-xs
                    font-bold
                    text-[#f5b335]
                  "
                >
                  {user?.username
                    ?.charAt(0)
                    ?.toUpperCase()
                  }
                </div>


                {/* Username */}

                <div className="hidden lg:block">

                  <p
                    className="
                      max-w-[120px]
                      truncate
                      text-[12px]
                      font-medium
                      text-white
                    "
                  >
                    {user?.username}
                  </p>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-zinc-600
                    "
                  >
                    {user?.role || "USER"}
                  </p>

                </div>

              </div>


              {/* Logout */}

              <button
                type="button"
                onClick={handleLogout}
                className="
                  rounded-lg
                  px-3
                  py-2
                  text-[13px]
                  font-medium
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                Logout
              </button>

            </>
          )}

        </div>


        {/* =========================================
            MOBILE MENU BUTTON
        ========================================= */}

        <button
          type="button"
          onClick={() =>
            setMenuOpen((value) => !value)
          }
          className="
            relative
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/[0.03]
            text-zinc-300
            transition-all
            duration-300
            hover:border-[#f5b335]/30
            hover:text-[#f5b335]
            md:hidden
          "
          aria-label="Toggle navigation"
        >

          {menuOpen ? (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                d="M6 6l12 12M18 6 6 18"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}

        </button>

      </nav>


      {/* =========================================
          MOBILE NAVIGATION
      ========================================= */}

      <div
        className={`
          overflow-hidden
          border-t
          border-white/[0.06]
          bg-black/95
          backdrop-blur-2xl
          transition-all
          duration-300
          md:hidden

          ${
            menuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }
        `}
      >

        <div className="mx-auto max-w-7xl px-6 py-5">

          <div className="flex flex-col">

            {/* Home */}

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.06]
                py-4
                text-sm
                font-medium
                text-zinc-400
                transition
                hover:text-white
              "
            >
              Home

              <span className="text-zinc-700">
                →
              </span>
            </NavLink>


            {/* Episodes */}

            <NavLink
              to="/episodes"
              onClick={() => setMenuOpen(false)}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.06]
                py-4
                text-sm
                font-medium
                text-zinc-400
                transition
                hover:text-white
              "
            >
              Episodes

              <span className="text-zinc-700">
                →
              </span>
            </NavLink>


            {/* About */}

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.06]
                py-4
                text-sm
                font-medium
                text-zinc-400
                transition
                hover:text-white
              "
            >
              About

              <span className="text-zinc-700">
                →
              </span>
            </NavLink>


            {/* =====================================
                MOBILE AUTH
            ===================================== */}

            {!isAuthenticated ? (
              <>
                {/* Sign In */}

                <NavLink
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    border
                    border-white/[0.08]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-zinc-300
                    transition-all
                    hover:border-[#f5b335]/30
                    hover:text-white
                  "
                >
                  Sign In

                  <span className="text-zinc-700">
                    →
                  </span>
                </NavLink>


                {/* Register */}

                <NavLink
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="
                    mt-2
                    rounded-lg
                    bg-[#f5b335]
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-bold
                    text-black
                    transition-all
                    hover:bg-[#ffc85c]
                  "
                >
                  Get Started
                </NavLink>
              </>
            ) : (
              <>
                {/* Logged-in user */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    px-4
                    py-3
                  "
                >

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#f5b335]/30
                      bg-[#f5b335]/10
                      text-sm
                      font-bold
                      text-[#f5b335]
                    "
                  >
                    {user?.username
                      ?.charAt(0)
                      ?.toUpperCase()
                    }
                  </div>

                  <div className="min-w-0">

                    <p
                      className="
                        truncate
                        text-sm
                        font-medium
                        text-white
                      "
                    >
                      {user?.username}
                    </p>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-zinc-600
                      "
                    >
                      {user?.role || "USER"}
                    </p>

                  </div>

                </div>


                {/* Logout */}

                <button
                  type="button"
                  onClick={handleLogout}
                  className="
                    mt-2
                    w-full
                    rounded-lg
                    border
                    border-white/[0.08]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-zinc-400
                    transition-all
                    hover:border-red-500/20
                    hover:bg-red-500/[0.05]
                    hover:text-red-300
                  "
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;