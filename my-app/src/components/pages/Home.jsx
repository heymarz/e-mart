import React from 'react';
import PostsContainer from "./Posts/PostsContainer";

function Home ({handleFavorite}) {
  return (
    <div>
      <PostsContainer handleFavorite={handleFavorite} />
    </div>
  )
}

export default Home