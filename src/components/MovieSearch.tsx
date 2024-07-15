import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { MovieView } from "./MovieView";

// Type for search inputs
export type SearchInputs = {
  title: string;
  type: string;
};

// Setup validation with yup
const schema = yup.object().shape({
  title: yup.string().required("Please enter a title!"),
  type: yup.string().required("Please select an option!"),
});

export const MovieSearch = () => {
// Register input fields + handle search + add yup schema
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchInputs>({
    resolver: yupResolver(schema),
  });

  // Set search parameters -> initial value is empty
  const [searchParams, setSearchParams] = useState({ title: "", type: "" });

  // Save search results in local storage
  const storeSearchResults = (results: any) => {
    localStorage.setItem("lastSearchResults", JSON.stringify(results));
  };

  // Setup search with stored params or initial values
  const storedSearchParams = localStorage.getItem("lastSearchResults");
  useEffect(() => {
    if (storedSearchParams) {
      setSearchParams(JSON.parse(storedSearchParams));
    }
  }, []);

  // Get data or display error message
  const { data, isLoading, isError } = useSearchMovies(
    searchParams.title,
    searchParams.type
  );

  // Animated loader
  const loader = (
    <img
      src="/assets/icons/loader.svg"
      alt="Loading ..."
      className="text-center w-20 h-auto mx-auto"
    />
  );

  // Error message when no results are found
  const [noResultsError, setNoResultsError] = useState("");

  // Check for results
  useEffect(() => {
    if (data && data.Response === "False") {
      setNoResultsError("No movies or series found!");
    } else {
      setNoResultsError("");
      storeSearchResults(searchParams); // Store search results in local storages
    }
  }, [data]);

  // Handle click on search button
  const onSubmit = (data: SearchInputs) => {
    setSearchParams(data);
  };

  // Reset search results
  const resetSearch = () => {
    setSearchParams({ title: "", type: "" }); // Reset search parameters
    reset(); // Reset input
    localStorage.removeItem("lastSearchResults"); // Reset local storage
  };

  return (
    <>
      <h2 className="md:text-5xl text-3xl text-center text-neutral-50 font-light my-6">
        Search for a Movie or Series
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-black bg-opacity-85 rounded p-10 text-neutral-50 mb-5">
        <section className="flex md:flex-row flex-col items-top w-full gap-5 mb-6">
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="title">
              Name of movie/series <span className="required">*</span>
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="ring-2 rounded px-3 py-2 mt-2"
            />
            <p className="text-moviered_light mt-3">{errors.title?.message}</p>
          </div>

          <div className="flex flex-col md:w-1/2 w-full">
            <label>
              Select type <span className="required">*</span>
            </label>
            <div className="flex items-center gap-3 mt-1">
                    <input
                      type="radio"
                      id="movie"
                      value="movie"
                      {...register("type")}
                    />
                    <label htmlFor="movie">Movie</label>
                    <input
                      type="radio"
                      id="series"
                      value="series"
                      {...register("type")}
                    />
                    <label htmlFor="series">Series</label>
            </div>
            <p className="text-moviered_light mt-1">{errors.type?.message}</p>
          </div>
        </section>

        <section className="flex items-center gap-3 mb-12">
          <button
            type="submit"
            className="bg-gradient-to-r from-moviered_dark hover:from-moviered_extradark via-moviered to-moviered_light hover:to-moviered hover:transition-all text-white font-semibold tracking-wider rounded shadow px-4 py-2">
            Search
          </button>
          <button
            type="button"
            onClick={resetSearch}
            className="bg-gradient-to-r from-gray-700 hover:from-gray-800 via-gray-600 to-gray-500 hover:to-gray-600 hover:transition-all text-white font-semibold tracking-wider rounded shadow px-4 py-2">
            Reset search
          </button>
        </section>
      </form>
      {data?.Search && <MovieView movies={data.Search} />}
      <div className="bg-white bg-opacity-85 rounded">
      {isLoading && <p className="text-center">{loader}</p>}
      {isError && (
        <p className="text-xl text-center py-5">Error! Please try again later ...</p>
      )}
      {noResultsError && (
        <p className="text-xl text-center py-5">{noResultsError}</p>
      )}
      </div>
    </>
  );
};
