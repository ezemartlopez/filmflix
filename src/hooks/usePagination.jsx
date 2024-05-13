import {useEffect, useState} from 'react';
import { getStorageItem, setStorageItem } from "../functions/Session";

const IDENTIFIER = "page"

function usePagination() {
  const [currentPage, setCurrentPage] = useState(getStorageItem(IDENTIFIER, 1));
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const restartPagination = () =>{
    setCurrentPage(1);
  }

  useEffect(() => {
    setStorageItem(IDENTIFIER, currentPage);
  }, [currentPage])
  

  return {currentPage, handleNextPage, handlePrevPage, restartPagination};
}

export default usePagination