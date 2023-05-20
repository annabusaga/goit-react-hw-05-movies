import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [value, setvalue] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };

  const onChange = event => {
    setvalue(event.target.value);
  };

  return (
    <header>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={onChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
