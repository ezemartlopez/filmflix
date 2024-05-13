import '../App.css';
import Movies from '../components/Movies';
import useMovies from '../hooks/useMovies';
import useSearch from '../hooks/useSearch';
import useCategory from '../hooks/useCategory';
import { useEffect, useState } from 'react';
import usePagination from '../hooks/usePagination';
import Pagination from '../components/Pagination';
import IfBlock from '../purecomponents/IfBlock';
import Search from "../components/Search";

function limpiarEspacios(cadena) {
  // Eliminar espacios al principio y final
  //cadena = cadena.trim();
  // Eliminar espacios adicionales entre palabras
  cadena = cadena.replace(/\s+/g, " ");
  return cadena;
}


function Home() {
  const {currentPage, handleNextPage, handlePrevPage, restartPagination} = usePagination();
  const {category, selectAll, selectMovies, selectSeries} = useCategory();
  const {search, updateSearch, error} = useSearch();
  const {movies, getMovies, pages, loading} = useMovies(search, category, currentPage);
  const [first, setFirst] = useState(true);
  const handleSubmit = (event) =>{
    setFirst(false)
    event.preventDefault();
    restartPagination();
    getMovies();
  }
  const handleChange = (event) =>{
    const value = event.target.value;
    updateSearch(limpiarEspacios(value));
  }

  useEffect(() => {
    getMovies();
  }, [currentPage, category]);
  return (
    <>
      <nav className="flex justify-center">
          <button onClick={()=> {selectAll(); restartPagination();}} className={`text-white w-[150px] font-bold py-2 transition-colors duration-500 ${category === ''?'bg-yellow-500':'' }` } >All</button>
          <button onClick={()=>{selectMovies(); restartPagination();}} className={`text-white w-[150px] font-bold py-2 transition-colors duration-500 ${category === 'movie'?'bg-yellow-500':'' }` }>Movies</button>
          <button onClick={()=>{selectSeries(); restartPagination();}} className={`text-white w-[150px] font-bold py-2 transition-colors duration-500 ${category === 'series'?'bg-yellow-500':'' }` }>Series</button>
      </nav>
      <div className="w-full px-[20px] flex flex-col items-center gap-2">
        <div className="max-w-[1000px] w-full mt-4 flex flex-col gap-4">
          <h2 className="text-4xl text-white font-bold">Welcome to Film-Flix</h2>
          <p className="text-xl text-slate-300">Film-Flix is a search engine designed to help you discover and explore movies effortlessly. Search for your favorite films or series and uncover detailed information and more.</p>
        </div>
        <Search search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <main className="w-full flex-grow py-4 flex justify-center">
        <div className="max-w-[1000px] px-[20px] w-full flex flex-col items-center">
          <IfBlock condition={!loading}>
            <Movies movies={movies} first={first}/>
          </IfBlock>
          <IfBlock condition={loading}>
            <p className='text-white'>Cargando...</p>
          </IfBlock>
        </div>
      </main>
      <footer className='bg-neutral-800 text-white flex justify-center'>
      <Pagination
        currentPage={currentPage}
        totalPages={pages}
        incrementPage={handleNextPage}
        decrementPage={handlePrevPage}
      />
      </footer>
    </>
  )
}

export default Home;