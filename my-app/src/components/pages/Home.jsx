import React from 'react';
import PostsContainer from "./Posts/PostsContainter";

function Home ({saleItems, handleSearch, search}) {
  return (
    <div>
      <PostsContainer saleItems={saleItems} handleSearch={handleSearch} search={search}/>
    </div>
  )
}

export default Home