import s from './SearchForm.module.css';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const onInputChange = e => {
    setSearch(e.target.value);
  };
  const onSubmitInput = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');

    e.currentTarget.children[0].value = '';
  };

  return (
    <form onSubmit={onSubmitInput} className={s.form}>
      <input onChange={onInputChange} className={s.input}></input>
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
