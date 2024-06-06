import React from 'react';
import { Link, useParams } from "react-router-dom";

const movieDetailStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#141414',
  color: '#fff',
};

const trailerStyle = {
  marginTop: '20px',
};

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div style={{ ...movieDetailStyle, color: '#e50914' }}>Movie not found</div>;
  }

  return (
    <div className="movie-detail" style={movieDetailStyle}>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Rating: {movie.rating}</p>
      <p>Description: {movie.description}</p>
      <div className="trailer" style={trailerStyle}>
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title={movie.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
