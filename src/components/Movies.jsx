function ListOfMovies({movies}) {
  return (
    <ul className="movies">
      {movies.map((movie, index)=> (
        <li key={index}>
          <a href={`/${movie.id}`} key={index} className="cursor-pointer flex flex-col gap-2 hover:-translate-y-3 hover:opacity-60 transition-all duration-500">
            <img src={movie.poster} alt={movie.title} className="h-[400px] w-full rounded-lg"/>
            <div className="h-[100px] flex flex-col items-center justify-start">
              <h3 className="text-white text-md font-bold">{movie.title}</h3>
              <p className="text-slate-300">{movie.year}</p>
            </div>
          </a>
        </li>
        ))}
    </ul>
  );
}

function NoMoviesResults() {
  return (
    <p className="text-white">No se encontraron peliculas para esta busqueda</p>
  );
}

function Movies({movies, first}) {
  const hasMovies = movies!==null? movies.length > 0: false;
  return ( hasMovies?
      <ListOfMovies movies={movies}/> :
      !first? <NoMoviesResults/>: null
  );
}

export default Movies