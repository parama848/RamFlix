import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">

      <div>

        <p className="text-7xl font-bold text-amber-500">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold">
          Page not found
        </h1>

        <p className="mt-3 text-zinc-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;