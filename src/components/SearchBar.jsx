import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <div style={{ margin: '1rem' }}>
      <input
        type="text"
        placeholder="搜索电影..."
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ padding: '0.5rem', width: '200px' }}
      />
    </div>
  );
}

export default SearchBar;
