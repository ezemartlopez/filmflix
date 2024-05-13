import NotImageMovie from "../assets/notImageMovie.png";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function searchMovies(search, category, actualPage){
    search = search.trim();

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
        poster: movie.Poster==="N/A"? NotImageMovie: movie.Poster
    }));

    return {responseMovies:mappedMovies, results: json.totalResults};
        
}

export async function fetchMovie(id) {
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
        const json = await res.json();
        const mappedMovie = {
            title: json.Title,
            image: json.Poster,
            description: json.Plot,
            rating: json.imdbRating,
            year: json.Year,
            runtime: json.Runtime,
            rated: json.Rated,
            actors: json.Actors,
            director: json.Director,
            genre: json.Genre,
            votes: json.imdbVotes,
            language: json.Language,
            type: json.Type
        };
        return mappedMovie;
    } catch (error) {
        console.error('Error fetching movie:', error);
        throw new Error('Failed to fetch movie data');
    }
}