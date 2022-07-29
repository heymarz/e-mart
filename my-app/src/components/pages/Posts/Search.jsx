import React, { useState } from 'react';
import Button from "react-bootstrap/Button"

function Search({ data, handleSearch }) {
  const [search, setSearch] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    handleSearch(search)
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