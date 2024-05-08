function Pagination({ currentPage, totalPages, incrementPage, decrementPage }) {
  return totalPages!== 0? 
    <div className="flex gap-4 py-4">
      <button onClick={decrementPage} disabled={currentPage === 1} className={`${currentPage===1?'bg-yellow-500/50':'bg-yellow-500'} px-2 rounded-md`}>Anterior</button>
      <span>{currentPage} de {totalPages}</span>
      <button onClick={incrementPage} disabled={currentPage === totalPages} className={`${currentPage===totalPages?'bg-yellow-500/50':'bg-yellow-500'} px-2 rounded-md`}>Siguiente</button>
    </div>
    :
    null;
}

export default Pagination;
