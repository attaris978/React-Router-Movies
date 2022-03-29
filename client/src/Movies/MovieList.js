import React from 'react';
import {NavLink} from 'react-router-dom';

export default function MovieList(props) {
  
  const {movies} = props;

  return (
    
    <div className="movie-list">
      {movies.map(movie => (
        <NavLink to={`./movies/${movie.id}`} key={movie.id}>
        <MovieDetails key={movie.id} movie={movie} />
        </NavLink>
      ))}
    </div>
    
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
