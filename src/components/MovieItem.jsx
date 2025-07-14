import React from 'react';

function MovieItem({ movie }) {
  return (
    <div style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
      <strong>{movie.title}</strong> <span>({movie.year})</span>
    </div>
  );
}

export default MovieItem;
