const API_KEY = import.meta.env.VITE_API_KEY;  
const NOT_IMAGE = "https://healthstrives.com/wp-content/themes/digiqole/assets/images/default_thumb.jpg";
export async function searchMovies(search, category, actualPage){

    if(search === ""){
        throw new Error("No puede buscar con un texto vacio");
    }

    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${category}&page=${actualPage}`);
    const json = await res.json();

    if (!("Search" in json)) {
        throw new Error("No hay busquedas disponibles");
    }
      
    const resmovies = json.Search;
    const mappedMovies = resmovies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster==="N/A"? NOT_IMAGE: movie.Poster
    }));

    return {responseMovies:mappedMovies, results: json.totalResults};
        
}

export async function getMovie(id){
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
    const json = await res.json();
    
}