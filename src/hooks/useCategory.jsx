import { useEffect, useState } from "react";
import { getStorageItem, setStorageItem } from "../functions/Session";

const IDENTIFIER = "category";

function useCategory() {
  const [category, setCategory] = useState(getStorageItem(IDENTIFIER, ""));
  const selectAll = () => setCategory("");
  const selectMovies = () => setCategory("movie");
  const selectSeries = () => setCategory("series");

  useEffect(() => {
    setStorageItem(IDENTIFIER, category);
  }, [category])
  
  return {category, selectAll, selectMovies, selectSeries};
}

export default useCategory;