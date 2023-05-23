import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Navbar = () => {
    return (
      <>
      <nav>
        <div className='navhead'>
          <h1 className="text-2xl">CINEFLIX</h1>
  
        </div>
          
        

        <div className='links'>
       
          <h2 className="hover:animate-bounce"><Link to="/">Home</Link></h2>
          <h2 className="hover:animate-bounce"><Link to="/search">Search</Link></h2>
          <h2 className="hover:animate-bounce"><Link to="/movies">Movies</Link></h2>
          <h2 className="hover:animate-bounce"><Link to="/tvseries">TV Series</Link></h2>
          <h2 className="hover:animate-bounce"><Link to="/list">List</Link></h2>
          <h2 className="hover:animate-bounce"><Link to="/about">About</Link></h2>
          
        </div>
      </nav>
      <Outlet/>
      </>
    )
  }

export default Navbar