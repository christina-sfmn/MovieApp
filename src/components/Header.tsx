import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate(); // useNavigate hook for page navigation

  // Clear search history
  const clearSearch = () => {
    localStorage.removeItem("lastSearchResults");
  }

  return (
    <header className="fixed top-0 left-0 flex items-center justify-between gap-3 w-full bg-gradient-to-r from-moviered_dark to-moviered_light shadow sm:px-8 px-16 py-4 z-50">
      <div className="flex flex-row gap-3">
        <img
          src="/assets/icons/movie-film-roll.svg"
          className="w-8 h-8"
        />
        <p className="uppercase md:text-3xl text-2xl text-neutral-50 font-bold">
          <a href="/" onClick={clearSearch}>Movie App</a>
        </p>
      </div>
      <div>
        <button
          type="button"
          onClick={() => navigate(`/favorites`)}
          className="bg-gradient-to-r from-neutral-300 hover:from-neutral-400 via-neutral-100 to-neutral-50 hover:to-neutral-100 hover:transition-all font-semibold rounded shadow px-4 py-2">
          Show my favorites
        </button>
      </div>
    </header>
  );
};
