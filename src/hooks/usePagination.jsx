import {useState} from 'react';

function usePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const restartPagination = () =>{
    setCurrentPage(1);
  }
  return {currentPage, handleNextPage, handlePrevPage, restartPagination};
}

export default usePagination