import { useState } from "react";


function useCategory() {
  const [category, setCategory] = useState("");
  const selectAll = () => setCategory("");
  const selectMovies = () => setCategory("movie");
  const selectSeries = () => setCategory("series");
  const selectEpisodes = () => setCategory("episode");

  return {category, selectAll, selectEpisodes, selectMovies, selectSeries};
}

export default useCategory;