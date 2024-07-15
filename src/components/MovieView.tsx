import { useEffect, useState } from "react";
import { MovieObject } from "../types";
import { useNavigate } from "react-router-dom";

type MovieViewProps = {
  movies: MovieObject[];
};

export const MovieView = ({ movies }: MovieViewProps) => {
  const navigate = useNavigate(); // useNavigate hook for page navigation
  const [favorites, setFavorites] = useState<MovieObject[]>([]); // Array to save to favorites

  // Load favorites from local storage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Function to add favorites
  const addToFavorites = (movie: MovieObject) => {
    // Check if movie was already added to favorites
    if (!favorites.some((favorite) => favorite.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
      localStorage.setItem("favorites", JSON.stringify([...favorites, movie]));
      alert("Movie/Series added to favorites!");
    } else {
      alert("Movie/Series already saved to favorites!");
    }
  };

  return (
    <section className="bg-neutral-50 bg-opacity-85 rounded md:p-10 p-5">
      <h2 className="text-3xl font-semibold mb-5">Results</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th className="text-center lg:table-cell hidden">Year</th>
            <th className="text-center lg:table-cell hidden">Type</th>
            <th className="text-center">Details</th>
            <th className="text-center">Add to Favorites</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: MovieObject) => (
            <tr key={movie.imdbID} className="divider">
              <td>{movie.Title}</td>
              <td className="text-center lg:table-cell hidden">{movie.Year}</td>
              <td className="text-center capitalize lg:table-cell hidden">{movie.Type}</td>
              <td className="text-center">
                <button
                  onClick={() => navigate(`movie/${movie.imdbID}`)}
                  className="bg-gradient-to-r from-moviered_dark hover:from-moviered_extradark to-moviered_light hover:to-moviered hover:transition-all text-white font-semibold tracking-wider rounded md:px-5 p-2 md:my-3 my-1">
                  More info
                </button>
              </td>
              <td className="text-center">
                <button
                  onClick={() => addToFavorites(movie)}
                  className="bg-gradient-to-r from-yellow-700 hover:from-yellow-800 via-yellow-600 to-yellow-500 hover:to-yellow-600 hover:transition-all text-white font-semibold tracking-wider rounded md:px-5 p-2 md:my-3 my-1 md:min-w-0 min-w-16 md:min-h-0 min-h-14">
                  ❤
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
