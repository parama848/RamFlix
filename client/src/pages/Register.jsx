import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =========================================
  // HANDLE REGISTER
  // =========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await register(
        formData.username,
        formData.email,
        formData.password
      );

      setSuccess(
        "Account created successfully. Redirecting to login..."
      );

      setFormData({
        username: "",
        email: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black pt-[76px]">

      {/* =========================================
          BACKGROUND GOLDEN GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[550px]
          w-[550px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#f5b335]/[0.06]
          blur-[130px]
        "
      />

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

      {/* =========================================
          REGISTER SECTION
      ========================================= */}

      <section
        className="
          relative
          flex
          min-h-[calc(100vh-76px)]
          items-center
          justify-center
          px-6
          py-16
        "
      >

        <div className="w-full max-w-md">

          {/* =========================================
              HEADER
          ========================================= */}

          <div className="mb-8 text-center">

            <p
              className="
                mb-3
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#f5b335]
              "
            >
              Begin Your Journey
            </p>

            <h1
              className="
                text-3xl
                font-semibold
                tracking-tight
                text-white
                sm:text-4xl
              "
            >
              Create your account
            </h1>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-zinc-500
              "
            >
              Join RamFlix and experience the story of
              Ramayanam.
            </p>

          </div>


          {/* =========================================
              REGISTER CARD
          ========================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.03]
              p-7
              shadow-[0_25px_80px_rgba(0,0,0,0.55)]
              backdrop-blur-2xl
              sm:p-8
            "
          >

            {/* Card golden line */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#f5b335]/40
                to-transparent
              "
            />


            {/* =========================================
                ERROR MESSAGE
            ========================================= */}

            {error && (
              <div
                className="
                  mb-6
                  rounded-xl
                  border
                  border-red-500/20
                  bg-red-500/[0.07]
                  px-4
                  py-3
                  text-sm
                  leading-5
                  text-red-300
                "
              >
                {error}
              </div>
            )}


            {/* =========================================
                SUCCESS MESSAGE
            ========================================= */}

            {success && (
              <div
                className="
                  mb-6
                  rounded-xl
                  border
                  border-[#f5b335]/20
                  bg-[#f5b335]/[0.06]
                  px-4
                  py-3
                  text-sm
                  leading-5
                  text-[#f5b335]
                "
              >
                {success}
              </div>
            )}


            {/* =========================================
                FORM
            ========================================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* =========================================
                  USERNAME
              ========================================= */}

              <div>

                <label
                  htmlFor="username"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    tracking-wide
                    text-zinc-400
                  "
                >
                  Username
                </label>

                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
                  autoComplete="username"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-black/50
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-zinc-600
                    transition-all
                    duration-300
                    focus:border-[#f5b335]/50
                    focus:bg-black/70
                    focus:shadow-[0_0_20px_rgba(245,179,53,0.08)]
                  "
                />

              </div>


              {/* =========================================
                  EMAIL
              ========================================= */}

              <div>

                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    tracking-wide
                    text-zinc-400
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-black/50
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-zinc-600
                    transition-all
                    duration-300
                    focus:border-[#f5b335]/50
                    focus:bg-black/70
                    focus:shadow-[0_0_20px_rgba(245,179,53,0.08)]
                  "
                />

              </div>


              {/* =========================================
                  PASSWORD
              ========================================= */}

              <div>

                <label
                  htmlFor="password"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    tracking-wide
                    text-zinc-400
                  "
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  minLength={6}
                  autoComplete="new-password"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-black/50
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-zinc-600
                    transition-all
                    duration-300
                    focus:border-[#f5b335]/50
                    focus:bg-black/70
                    focus:shadow-[0_0_20px_rgba(245,179,53,0.08)]
                  "
                />

                <p
                  className="
                    mt-2
                    text-[11px]
                    text-zinc-600
                  "
                >
                  Password must contain at least 6 characters.
                </p>

              </div>


              {/* =========================================
                  REGISTER BUTTON
              ========================================= */}

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  relative
                  mt-2
                  h-12
                  w-full
                  overflow-hidden
                  rounded-xl
                  bg-[#f5b335]
                  text-sm
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#ffc85c]
                  hover:shadow-[0_0_30px_rgba(245,179,53,0.22)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                <span className="relative z-10">

                  {loading
                    ? "Creating account..."
                    : "Create Account"
                  }

                </span>


                {/* Shine animation */}

                {!loading && (
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
                )}

              </button>

            </form>


            {/* =========================================
                LOGIN LINK
            ========================================= */}

            <div
              className="
                mt-7
                border-t
                border-white/[0.06]
                pt-6
                text-center
              "
            >

              <p className="text-sm text-zinc-500">

                Already have an account?

                <Link
                  to="/login"
                  className="
                    ml-1.5
                    font-medium
                    text-[#f5b335]
                    transition-colors
                    duration-300
                    hover:text-[#ffc85c]
                  "
                >
                  Sign in
                </Link>

              </p>

            </div>

          </div>


          {/* =========================================
              FOOTER TEXT
          ========================================= */}

          <p
            className="
              mt-6
              text-center
              text-[11px]
              tracking-wide
              text-zinc-700
            "
          >
            Your journey through Ramayanam begins here.
          </p>

        </div>

      </section>

    </main>
  );
};

export default Register;