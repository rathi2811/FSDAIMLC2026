import React from 'react'
import './Imbdcard.css'
import image1 from './image1.jpeg'
import C from './C.jpeg'

function Imbdcard() {

  const movies = [
    { rank: 1, name: "Superman", image: image1 },
    { rank: 2, name: "Weapons", image: image1 },
    { rank: 3, name: "Sinners", image: image1 },
    { rank: 4, name: "One Battle After Another", image: image1 },
    { rank: 5, name: "Jurassic World: Rebirth", image: image1 },
    { rank: 6, name: "Frankenstein", image: C },
    { rank: 7, name: "Happy Gilmore 2", image: C },
    { rank: 8, name: "Thunderbolts*", image: C },
    { rank: 9, name: "Mission: Impossible", image: C },
    { rank: 10, name: "F1", image: C }
  ]

  return (
    <div className="imbd">

      <h1>IMBD</h1>

      <h2>BEST OF 2025</h2>

      <h3>MOST POPULAR MOVIES</h3>

      <p>AS OF 12/2/25</p>

      <div className="movie-grid">

        {movies.map((movie) => (
          <div className="movie" key={movie.rank}>

            <img src={movie.image} />

            <div>
              <span className="rank">{movie.rank}</span>
              <span className="movie-name">{movie.name}</span>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Imbdcard