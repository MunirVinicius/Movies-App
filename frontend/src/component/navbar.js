import React,{useState} from "react";
import Card from './card';

import './navbar.css';

export default function SearchMovie(){

    const [query, setQuery] = useState('');

    const [movies, setMovies] = useState([]);


    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=ba8df5d748042694adc8366a5f6d3f39&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div>
            <nav>
                <ul>
                    <li className="logo">Movies</li>
                    <div className="items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </div>
                    <form className="form" onSubmit={searchMovies} >
                        <li className="search-icon">
                            <input type="search" name="query" value={query}  onChange={(e)=>setQuery(e.target.value)} placeholder="Jurassic Park i.e" />
                            <button className="button" type="submit">Search</button>
                        </li>
                    </form>
                </ul>
            </nav>
            <div className="container">
                <h1 className="title">Movie Search</h1>
            </div>
            <div className="cards">
            {movies.filter(movie => movie.poster_path).map(movie => (
                   <Card movie={movie} key={movie.id} />
            ))}
            </div>        
        </div>
    )
}
