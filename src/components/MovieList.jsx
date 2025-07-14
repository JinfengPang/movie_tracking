import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <div style={{ margin: '1rem' }}>没有找到相关电影。</div>;
  }
  return (
    <div style={{ margin: '1rem' }}>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
