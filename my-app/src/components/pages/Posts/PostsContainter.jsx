import React, {useContext} from 'react';
import DataContext from '../../../DataContext';
import PostCards from './PostCards';
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import './post.css'

function PostsContainter({handleFavorite}){
  const {saleItems, handleSearch, search, currentUser} = useContext(DataContext)
  const navigate = useNavigate();

  function showDetails(post_id){
    navigate(`/for_sale_items/${post_id}`)
  }

  function items(){
    if(saleItems){
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
          handleFavorite={handleFavorite}
          buyerId = {currentUser.id}
        />
    )
  })
}}
  
  return (
    <div>
      <h1 className='container'>For Sale Items</h1>
      <Search handleSearch={handleSearch} />
      <ul>
        {items()}
      </ul>
    </div>
  )
}

export default PostsContainter