import axios from "axios";
import { useQuery } from "react-query";

// API key
const apiKey = "56edad45";

// Fetch data
const searchMovies = async (Title: string, Type: string) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${Title}&type=${Type}`
    );
    return response.data;
  } catch (error) {
    alert("Error fetching data!");
  }
};

// Execute function
export const useSearchMovies = (Title: string, Type: string) =>
  useQuery(["movies", Title, Type], () => searchMovies(Title, Type), {
    enabled: !!Title,
  }); // form validation with yup + query with parameter "enabled" to avoid unnecessary requests
