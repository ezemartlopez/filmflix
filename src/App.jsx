import './App.css'
import Movies from './components/Movies';
import useMovies from './hooks/useMovies';
import useSearch from './hooks/useSearch';
import useCategory from './hooks/useCategory';
import { useEffect, useRef, useState } from 'react';
import logo from "./assets/logo_video.png";
import usePagination from './hooks/usePagination';
import Pagination from './components/Pagination';
import IfBlock from './purecomponents/IfBlock';
import Search from "./components/Search";



function App() {
  //https://www.omdbapi.com/?apikey=4287ad07&s=Avenger
  const {currentPage, handleNextPage, handlePrevPage, restartPagination} = usePagination();
  const {category, selectAll, selectEpisodes, selectMovies, selectSeries} = useCategory();
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
    updateSearch(value);
  }

  useEffect(() => {
    getMovies();
  }, [currentPage, category]);
  return (
    <div className="w-full h-screen overflow-auto flex flex-col">
      <header className="w-full py-4 flex flex-row justify-center items-center bg-yellow-500 gap-4">
        <img src={logo} alt="Logo_img" className="size-14 mix-blend-multiply"/>
        <h1 className="text-white font-bold text-5xl">Film-Flix</h1>
      </header>
      <nav className="flex justify-center bg-neutral-800">
          <button onClick={()=> {selectAll(); restartPagination();}} className={`text-white w-[150px] font-bold py-2 transition-colors duration-500 ${category === ''?'bg-yellow-500':'' }` } >Todos</button>
          <button onClick={()=>{selectMovies(); restartPagination();}} className={`text-white w-[150px] font-bold py-2 transition-colors duration-500 ${category === 'movie'?'bg-yellow-500':'' }` }>Peliculas</button>
          <button onClick={()=>{selectSeries(); restartPagination();}} className={`text-white w-[150px] font-bold py-2 transition-colors duration-500 ${category === 'series'?'bg-yellow-500':'' }` }>Series</button>
          <button onClick={()=>{selectEpisodes(); restartPagination();}} className={`text-white w-[150px] font-bold py-2 transition-colors duration-500 ${category === 'episode'?'bg-yellow-500':'' }` }>Episodios</button>
      </nav>
      <div className="w-full bg-neutral-700 px-[20px] flex flex-col items-center gap-2">
        <div className="max-w-[1000px] w-full mt-4 flex flex-col gap-4">
          <h2 className="text-4xl text-white font-bold">Bienvenido a Film-Flix</h2>
          <p className="text-xl text-slate-300">Film-Flix es tu herramienta para descubrir y explorar películas de forma sencilla. Busca tus películas favoritas, series o episodios, encuentra información detallada y más.</p>
        </div>
        <Search search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <main className="w-full flex-grow py-4  bg-neutral-700 flex justify-center">
        <div className="max-w-[1000px] px-[20px] w-full flex flex-col items-center">
          <IfBlock condition={!loading}>
            <Movies movies={movies} first={first}/>
          </IfBlock>
          <IfBlock condition={loading}>
            <p>Cargando...</p>
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
    </div>
  )
}

export default App
