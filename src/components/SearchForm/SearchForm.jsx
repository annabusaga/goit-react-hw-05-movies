import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search film"
          value={value}
          onChange={onChange}
        />
      </form>
    </header>
  );
};

export default SearchForm;
