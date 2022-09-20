import React, { useState, useContext } from 'react';
import DataContext from '../../../DataContext';
import Button from "react-bootstrap/Button"

function Search() {
  const [search, setSearch] = useState("")
  const { handleSearch } = useContext(DataContext);

  function handleSubmit(e){
    e.preventDefault();
    handleSearch(search)
    setSearch('')
  }

  return (
    <div>
      <form className='classes.search'onSubmit={handleSubmit}>
        <br />
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <Button variant="light" size="sm" type="submit">🔍</Button>
        </form>
    </div>
  )
}

export default Search