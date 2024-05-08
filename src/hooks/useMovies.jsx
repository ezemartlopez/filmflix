import { useState } from "react";
import { searchMovies } from "../services/movies";

function calculatePages(totalElements, pageSize) {
  if (pageSize <= 0 || totalElements < 0) {
    throw new Error("Invalid arguments: pageSize must be a positive number and totalElements must be non-negative");
  }
  // Calculate the total number of pages
  const numberOfPages = Math.ceil(totalElements / pageSize);
  // Return the number of pages
  return numberOfPages;
}

function useMovies(search, category, actualPage) {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    setPages(0);
    setLoading(true);
    try {
      const {responseMovies, results} = await searchMovies(search, category, actualPage);
      setMovies(responseMovies);
      const totalPages = calculatePages(results, responseMovies.length)
      setPages(totalPages);
    } 
    catch (error) {
      console.log(error.message);
      setMovies([]);
    }
    finally{
      setLoading(false)
    }
  }
  return {movies, getMovies, pages, loading};
}

export default useMovies;