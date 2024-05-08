import {useState, useEffect, useRef} from 'react';

function useSearch() {
    const [search, setSearch] = useState("");//forma controlada de manejar inputs
    const [error, seterror] = useState("");
    const isFirstInput = useRef(true);
  
    //Si tiene un useEffect es un custom Hook
    useEffect(() => {
      if(isFirstInput.current){
        isFirstInput.current = search === "";
        return;
      }
      if(search === ""){
        seterror("No se puede buscar una pelicula vacia");
        return;
      }
      if(search.match(/^\d+$/)){
        seterror("No se puede buscar una pelicula con un numero");
        return;
      }
      if(search.length < 3){
        seterror("La busqueda debe tener al menos 3 caracteres");
        return;
      }
      seterror(null);
    }, [search])
  
    return {search, updateSearch:setSearch, error}
  }

export default useSearch;