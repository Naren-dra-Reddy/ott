import Navbar from './components/Navbar';
import Movie from './components/Movie';
import './App.css'
import Hero from './components/Hero';
import creed from './assets/creed.jpeg'
import prey from './assets/prey.jpg'
import moonlight from './assets/moonlight.jpeg'
import tgfh from './assets/tgfh.jpg'
import tar from './assets/tar.png'
import mib from './assets/mib.jpg'
import Search from './components/Search';
import { genres } from './components/Genres';
import { Action } from '@remix-run/router';

import Tv from './TVSeriesPage.jsx'
import About from './AboutPage.jsx'
function Home(props) {
    const addedList = props.addedList
    const setAddedList = props.setAddedList
  return (
    <div>
     <Hero/>
     {
        Object.keys(genres).map(genre=>{
            return(
                <div key={genre}>
                 <div className='genre' key={genre}>
                    <h2>{genre}</h2>
                </div>
                <div className='movie-container'>
                {
                    genres[genre].map(item=>{
                        return <Movie key={item.id} id={item.id} src={item.image} title={item.title} rating={item.rating}
                        addedList={addedList} setAddedList={setAddedList}
                        />
                    })
                 }
                </div>
                </div>
            )
        })
     }   
    </div>

  )
}
    


export default Home
