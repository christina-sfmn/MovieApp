import axios from "axios";
import { useQuery } from "react-query";

// API key
const apiKey = "56edad45";

// Fetch data
const getMovieDetails = async (imdbID: string) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
    );
    return response.data;
  } catch (error) {
    alert("Error fetching data!");
  }
};

export const useGetMovieDetails = (imdbID: string) =>
  useQuery(["movie", imdbID], () => getMovieDetails(imdbID), { enabled: !!imdbID }); // parameter "enabled" to avoid unnecessary requests 
