import React from 'react';
import PostsContainer from "./Posts/PostsContainter";

function Home ({handleFavorite}) {
  return (
    <div>
      <PostsContainer handleFavorite={handleFavorite} />
    </div>
  )
}

export default Home