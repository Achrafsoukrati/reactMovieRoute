import React from 'react';
import MovieCard from './MovieCard';

const listStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridGap: '20px',
};

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list" style={listStyle}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
