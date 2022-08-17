import React from 'react';
import PostCards from './PostCards';
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import './post.css'

function PostsContainter({saleItems, handleSearch, search}){
  const navigate = useNavigate();
  
  function showDetails(post_id){
    navigate(`/for_sale_items/${post_id}`)
  }

  function displayItems(){
    if (saleItems){
      return saleItems
  .filter((item)=> 
    item.itemTitle.includes(search.toLowerCase())
    // and execute this one too!!! ->> item.itemDescription.includes(search.toLowerCase())
  )
  .map((item)=> {
    return(
      <PostCards 
          key={item.id} 
          item={item}
          showDetails = {showDetails}
        />
    )
  })
}
  }
  return (
    <div>
      <h1 className='container'>For Sale Items</h1>
      <Search handleSearch={handleSearch} />
      <ul>
        {displayItems()}
      </ul>
    </div>
  )
}

export default PostsContainter