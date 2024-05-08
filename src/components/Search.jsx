
function Search({search, handleSubmit, handleChange}) {
  return (
        <form className="relative max-w-[1000px] w-full py-4 flex gap-2" onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={handleChange} name="search" placeholder="Avengers, StarWars, the Matrix"
          className="flex-grow text-xl text-slate-500 align-middle h-12 px-2 pb-1 rounded-lg"/>
          <button type="submit" className="h-12 px-2 absolute right-0 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-8 stroke-black stroke-2">
              <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>
  )
}

export default Search;