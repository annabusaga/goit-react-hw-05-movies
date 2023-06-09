import { useState } from 'react';
import css from './SearchForm.module.css';
import setParams from './SearchForm.module.css';
import setSearchValue from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value === '') {
      return setParams({});
    }
    setSearchValue(value);
    onSubmit(value.trim());
  };

  return (
    <header className={css.searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
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
