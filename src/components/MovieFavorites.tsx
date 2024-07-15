import { useState, useEffect } from "react";
import { MovieObject } from "../types";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

export const MovieFavorites = () => {
  const navigate = useNavigate(); // useNavigate hook for page navigation

  // Go back to previous page
  const goBack = () => {
    navigate(`/`);
  };

  const [favorites, setFavorites] = useState<MovieObject[]>([]); // State to save favorites in array
  const [ratings, setRatings] = useState<{ [imdbID: string]: number }>({}); // State for ratings

  // Load favorites + ratings from local storage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    const savedRatings = localStorage.getItem("ratings");
    if (savedRatings) {
      setRatings(JSON.parse(savedRatings));
    }
  }, []);

  // Remove favorites from list
  const removeFavorite = (imdbID: string) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.imdbID !== imdbID
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Handle rating
  const handleRating = (imdbID: string, Rating: number) => {
    // Update ratings object with new rating
    const updatedRatings = { ...ratings, [imdbID]: Rating };
    setRatings(updatedRatings);
    localStorage.setItem("ratings", JSON.stringify(updatedRatings));
  };

  return (
    <div className="container mx-auto py-20">
      <div className="bg-neutral-50 bg-opacity-85 rounded px-10 py-7 mt-8">
        <h2 className="text-3xl font-semibold text-center mt-8 mb-4">
          Favorite Movies & Series
        </h2>
        <button
          onClick={goBack}
          className="uppercase font-semibold hover:text-moviered_dark hover:transition-all my-6">
          ← Back to search page
        </button>
        {favorites.length === 0 ? (
          <p className="text-xl text-center pt-16 pb-20">
            You have no favorite movies or series saved!
          </p>
        ) : (
          <ul>
            {favorites.map((movie) => (
              <li key={movie.imdbID} className="mb-3 p-5 bg-neutral-50 rounded md:text-left text-center">
                <h3 className="text-xl font-semibold">{movie.Title}</h3>
                <p>
                  {movie.Year} /{" "}
                  <span className="capitalize">{movie.Type}</span>
                </p>
                <div className="flex md:flex-row flex-col items-center justify-between md:mb-0 mb-2">
                <Rating
                  onClick={(Rating) => handleRating(movie.imdbID, Rating)}
                  initialValue={ratings[movie.imdbID] || 0} className="-left-1 mt-2"
                />
                 <button
                  onClick={() => removeFavorite(movie.imdbID)}
                  className="bg-gradient-to-r from-gray-700 hover:from-gray-800 via-gray-600 to-gray-500 hover:to-gray-600 hover:transition-all text-white font-semibold tracking-wider rounded shadow px-3 py-1 md:mt-2 mt-4">
                  Remove from favorites
                </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
