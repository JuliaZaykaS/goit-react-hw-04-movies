import s from './SearchForm.module.css';
import { useState } from 'react';

const SearchForm = ({onSubmit}) => {
    const [search, setSearch] = useState('');
    const onInputChange = (e) => {
        setSearch(e.target.value)
    }
    const onSubmitInput = (e) => {
        e.preventDefault();
        onSubmit(search);
        setSearch('');
    }

  return (
    <form onSubmit={onSubmitInput}>
    {/* <> */}
      <input onChange={onInputChange}></input>
      <button type="submit" >Search</button>
    {/* </> */}
    </form>
  );
};

export default SearchForm;
