import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const API_KEY = "4287ad07";  


function View() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const getMovie = async () =>{
        try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
            const json = await res.json();
            setMovie(json);
            console.log(json);  
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
      getMovie();
    }, [])
    
  return (
    <div className="w-full h-full bg-neutral-800 text-white">
        {movie?.Title}
        <img src={movie?.Poster} alt="" />
    </div>
  )
}

export default View