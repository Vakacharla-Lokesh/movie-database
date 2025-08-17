import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract existing search param from URL, or empty string
  const urlParams = new URLSearchParams(location.search);
  const initialSearch = urlParams.get("search") || "";

  const [query, setQuery] = useState(initialSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      navigate(`/?search=${encodeURIComponent(trimmedQuery)}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <nav className="bg-dark-100 px-5 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
      {/* Back Button */}
      <div className="flex items-center h-full">
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-1 w-fit rounded shadow bg-gray-700 hover:bg-gray-600 flex items-center gap-1 text-sm"
          style={{ minWidth: "70px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md"
        role="search"
        aria-label="Movie search"
      >
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="w-full bg-light-100/10 text-white placeholder-light-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-600 text-left"
        />
        <svg
          className="absolute left-3 top-2.5 w-5 h-5 pointer-events-none text-light-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
          ></path>
        </svg>
      </form>
    </nav>
  );
}

export default Navbar;
