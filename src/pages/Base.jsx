import logo from "../assets/logo_video.png";
import { Outlet } from 'react-router-dom';



function Base() {

  return (
    <div className="w-full h-screen overflow-auto flex flex-col">
      <header className="w-full py-4 flex flex-row justify-center items-center bg-yellow-500 gap-4">
        <img src={logo} alt="Logo_img" className="size-14 mix-blend-multiply"/>
        <a href="/">
           <h1 className="text-white font-bold text-5xl cursor-pointer">Film-Flix</h1> 
        </a>
      </header>
    <Outlet/>
    </div>
  )
}

export default Base;