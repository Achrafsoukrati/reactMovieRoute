import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import { MovieData } from "../MovieData";

// Définir les styles
const addMovieStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#141414',
  color: '#fff',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  width: '80%',
  maxWidth: '400px',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#e50914',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
};

function Home() {
  const [movies, setMovies] = useState(MovieData);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleRateChange = (e) => {
    setFilterRate(e.target.value);
  };

  const handleAddMovie = () => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  const getFilteredMovies = () => {
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= filterRate
    );
  };

  return (
    <>
      <Filter
        title={filterTitle}
        rate={filterRate}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <MovieList movies={getFilteredMovies()} />
      <div className="add-movie" style={addMovieStyle}>
        <h2>Add New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) =>
            setNewMovie({ ...newMovie, title: e.target.value })
          }
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })
          }
          style={inputStyle}
        />
        <button
          onClick={handleAddMovie}
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d40813'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e50914'}
        >
          Add Movie
        </button>
      </div>
    </>
  );
}
export default Home;
