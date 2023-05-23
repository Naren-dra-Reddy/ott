import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./Home";
import Search from "./components/Search";
import MoviePage from './MoviePage';
import Tv from './TVSeriesPage.jsx'
import About from './AboutPage.jsx'
import List from "./components/List"
function App(){
  const [addedList, setAddedList] = useState({})
  return(
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home addedList={addedList} setAddedList={setAddedList}/>}/>
          <Route path="movies" element={<MoviePage addedList={addedList} setAddedList={setAddedList}/>} />
          <Route path="tvseries" element={<Tv />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search/>}/>
          <Route path="list" element={<List addedList={addedList} setAddedList={setAddedList}/>}/>
      </Routes>
    </>
    
  )
}

export default App