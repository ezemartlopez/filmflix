import { useState } from "react";


function useCategory() {
  const [category, setCategory] = useState("");
  const selectAll = () => setCategory("");
  const selectMovies = () => setCategory("movie");
  const selectSeries = () => setCategory("series");

  return {category, selectAll, selectMovies, selectSeries};
}

export default useCategory;