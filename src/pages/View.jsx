import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const API_KEY = import.meta.env.VITE_API_KEY;  
//import movie_response from "../mocks/movie-result.json";

function View() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const getMovie = async () =>{
        try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
            const json = await res.json();
            const movie_response = json;
            const mappedMovie = {
              title: movie_response.Title,
              image: movie_response.Poster,
              description: movie_response.Plot,
              rating: movie_response.imdbRating,
              year: movie_response.Year,
              runtime: movie_response.Runtime,
              rated: movie_response.Rated,
              actors: movie_response.Actors,
              director: movie_response.Director,
              genre: movie_response.Genre,
              votes: movie_response.imdbVotes,
              language: movie_response.Language,
              type: movie_response.Type
            }
            setMovie(mappedMovie);
            console.log(mappedMovie);  
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
      getMovie();
    }, []);


  const {title, image, description, rating, year, runtime, rated, actors, director, genre, votes, language, type} = movie;
  return (
  <div className="w-full h-full bg-neutral-900 text-white flex justify-center">
    <div className="w-full max-w-[1280px] h-full">
      <div className="w-full px-3 py-4 flex justify-end">
        <a href='/' className="bg-slate-600 hover:bg-slate-700 font-semibold py-1 px-4 rounded-md">Regresar</a>
      </div>
      <div className="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 h-auto">
        <div className="h-[500px] col-span-12 lg:col-span-4 place-self-center">
          <img src={image} alt="Image" className="w-[350px] h-full rounded-md"/>
        </div>
        <div className="h-[600px] px-4 lg:h-[500px] col-span-12 lg:col-span-8">
          <div className="w-full flex items-center item gap-6">
            <h1 className="h-10 text-3xl font-bold">{title}</h1>
            <div className="h-10 flex items-center gap-1">
              <span className="text-2xl font-medium">{rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 stroke-yellow-400 fill-yellow-400">
                <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
          </div>
          <div className="w-full flex gap-4 text-slate-400/80 font-semibold">
              <span>{year}</span>
              <span>|</span>
              <span>{runtime}</span>
              <span>|</span>
              <span>{rated}</span>
          </div>
          <div className="h-6 py-4 flex justify-start items-center gap-2">
            <span className="text-base font-medium">{votes}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 fill-white stroke-1 stroke-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
          </div>
          <div className="pt-6 flex flex-col gap-6">
            <p className="text-white/85">{description}</p> 
            <ul className="flex flex-col gap-2">
              <li className="flex gap-4">
                <span className="text-slate-400/80 font-medium">Actores: </span> <span>{actors}</span>
              </li>
              <li className="flex gap-4">
                <span className="text-slate-400/80 font-medium">Dirección: </span> <span>{director}</span>
              </li>
              <li className="flex gap-4">
                <span className="text-slate-400/80 font-medium">Género: </span> <span>{genre}</span>
              </li>
              <li className="flex gap-4">
                <span className="text-slate-400/80 font-medium">Tipo: </span> <span>{type==="movie"?"Pelicula":"Serie"}</span>
              </li>
              <li className="flex gap-4">
                <span className="text-slate-400/80 font-medium">Lenguajes: </span> <span>{language}</span>
              </li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default View;
//bg-green-500 sm:bg-blue-500 md:bg-red-500 lg:bg-purple-600 xl:bg-orange-300