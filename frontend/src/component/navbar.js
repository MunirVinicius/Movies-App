import React from "react";
import ReactDOM from "react-dom";

import './navbar.css';

export default function SearchMovie(){
    return (
        <nav>
            <ul>
                <li className="logo">Movies</li>
                <div className="items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </div>
                <form className="form" action="">
                    <li className="search-icon">
                        <input type="search" name="query" placeholder="Jurassic Park i.e" />
                        <button className="button" type="submit">Search</button>
                    </li>
                </form>
            </ul>
        </nav>
    )
}
