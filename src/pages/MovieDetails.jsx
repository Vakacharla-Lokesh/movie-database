import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        setError("");

        // Fetch movie details
        const resMovie = await fetch(
          `${API_BASE_URL}/movie/${movieId}`,
          API_OPTIONS
        );
        if (!resMovie.ok) throw new Error("Failed to fetch movie details");
        const movieData = await resMovie.json();

        // Fetch credits (cast)
        const resCredits = await fetch(
          `${API_BASE_URL}/movie/${movieId}/credits`,
          API_OPTIONS
        );
        if (!resCredits.ok) throw new Error("Failed to fetch credits");
        const creditsData = await resCredits.json();

        setMovie(movieData);
        setCast(creditsData.cast.slice(0, 6)); // top 6 cast
      } catch (err) {
        setError(err.message || "Error fetching movie data");
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  if (loading)
    return (
      <>
        <Navbar />
        <main className="wrapper pt-20 text-white">Loading...</main>
      </>
    );
  if (error)
    return (
      <>
        <Navbar />
        <main className="wrapper pt-20 text-red-500">Error: {error}</main>
      </>
    );

  if (!movie) return null;

  const {
    poster_path,
    title,
    genres,
    adult,
    overview,
    vote_average,
    vote_count,
    release_date,
    status,
    runtime,
    tagline,
  } = movie;

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/no-poster.png";

  return (
    <>
      <div className="bg-dark-100 min-h-screen">
        <Navbar />
        <main className="wrapper max-w-5xl mx-auto px-5 py-10 text-white">
          {/* Poster */}
          <div className="flex justify-center mb-8">
            <img
              src={posterUrl}
              alt={`${title} poster`}
              className="rounded-lg shadow-lg max-w-xs"
            />
          </div>

          {/* Title, Tagline, Genres, Status */}
          <h1 className="text-4xl font-bold mb-2 text-center">{title}</h1>
          {tagline && (
            <p className="text-center italic text-gray-300 mb-4">"{tagline}"</p>
          )}

          <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
            {genres.map((g) => (
              <span
                key={g.id}
                className="bg-purple-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {g.name}
              </span>
            ))}

            {adult && (
              <span className="bg-red-700 px-3 py-1 rounded-full text-sm font-bold">
                18+
              </span>
            )}

            <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              {status}
            </span>
          </div>

          {/* Release Date and Runtime as plain text */}
          <div className="flex justify-center gap-6 mb-8 text-gray-300 text-sm">
            <div>
              <strong>Release Date:</strong>{" "}
              {release_date
                ? new Date(release_date).toLocaleDateString()
                : "N/A"}
            </div>
            {runtime > 0 && (
              <div>
                <strong>Duration:</strong> {Math.floor(runtime / 60)}h{" "}
                {runtime % 60}m
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
            </svg>
            <span className="text-lg font-semibold">
              {vote_average?.toFixed(1)}
            </span>
            <span className="text-gray-400">({vote_count} votes)</span>
          </div>

          {/* Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              {overview || "No description available."}
            </p>
          </section>

          {/* Cast */}
          {cast.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">Top Cast</h2>
              <div className="flex flex-wrap gap-6 justify-center">
                {cast.map((actor) => (
                  <div
                    key={actor.cast_id}
                    className="w-24 text-center"
                  >
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                          : "/no-profile.png"
                      }
                      alt={actor.name}
                      className="rounded-lg mb-2 mx-auto"
                    />
                    <p className="text-sm font-medium">{actor.name}</p>
                    <p className="text-xs text-gray-400 italic">
                      {actor.character}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}

export default MovieDetails;
