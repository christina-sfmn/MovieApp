import { useNavigate, useParams } from "react-router-dom";
import { useGetMovieDetails } from "../hooks/useGetMovieDetails";

export const MovieDetail = () => {
  const navigate = useNavigate(); // useNavigate hook for page navigation

  // Go back to previous page
  const goBack = () => {
    navigate(-1);
  };

  // Use ID for routing + check for ID
  const { movieId } = useParams();
  if (!movieId) {
    return <p>Error: No movie ID provided!</p>;
  }

  // Get data or display error message
  const { data, isLoading, isError } = useGetMovieDetails(movieId);

  // Animated loader
  const loader = (
    <img
      src="/assets/icons/loader.svg"
      alt="Loading ..."
      className="text-center w-20 h-auto mx-auto"
    />
  );

  return (
    <div className="container mx-auto py-20">
      <div className="bg-neutral-50 bg-opacity-85 rounded px-10 py-5 mt-8">
        <button
          onClick={goBack}
          className="uppercase font-semibold hover:text-moviered_dark hover:transition-all my-6">
          ← Back to search page
        </button>
        {data && (
          <>
            <section className="flex md:flex-row flex-col-reverse md:items-start items-center md:gap-20 gap-5">
              <div>
                <img src={data.Poster} alt={data.Title} />
              </div>
              <div>
                <h1 className="text-4xl md:text-left text-center font-semibold mt-6 mb-3">
                  {data.Title}
                </h1>
                <p className="text-lg md:text-left text-center">
                  {data.Year} / {data.Genre}
                </p>
              </div>
            </section>
            <section className="mt-6">
              <table>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <td>{data.Title}</td>
                  </tr>
                  <tr className="divider">
                    <th>Year</th>
                    <td>{data.Year}</td>
                  </tr>
                  <tr className="divider">
                    <th>Genre</th>
                    <td>{data.Genre}</td>
                  </tr>
                  <tr className="divider">
                    <th>Plot</th>
                    <td>{data.Plot}</td>
                  </tr>
                  <tr className="divider">
                    <th>Type</th>
                    <td className="capitalize">{data.Type}</td>
                  </tr>
                  <tr className="divider">
                    <th>Released</th>
                    <td>{data.Released}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </>
        )}
        {isLoading && <p className="text-center">{loader}</p>}
        {isError && (
          <p className="text-xl text-center">Error loading movie details!</p>
        )}
      </div>
    </div>
  );
};
