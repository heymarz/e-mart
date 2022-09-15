import React from 'react';
import PostsContainer from "./Posts/PostsContainer";

function Home ({ handleFavorite, favorites }) {
  return (
    <div>
      <PostsContainer handleFavorite={handleFavorite} favorites={favorites} />
    </div>
  )
}

export default Home