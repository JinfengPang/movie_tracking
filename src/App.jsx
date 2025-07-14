import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

const DUMMY_MOVIES = [
  { id: 1, title: 'Inception', year: 2010 },
  { id: 2, title: 'Interstellar', year: 2014 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
  { id: 4, title: 'Parasite', year: 2019 },
];

function App() {
  const [search, setSearch] = useState('');

  // 简单的搜索过滤
  const filteredMovies = DUMMY_MOVIES.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchBar value={search} onChange={setSearch} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
