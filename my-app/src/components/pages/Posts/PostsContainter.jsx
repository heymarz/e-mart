import React, { useEffect, useState } from 'react';
import PostCards from './PostCards';
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import './post.css'

function PostsContainter(){
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function showDetails(post_id){
    navigate(`/for_sale_items/${post_id}`)
  }

  useEffect(()=>{
   fetch('/for_sale_items')
   .then(r=> r.json())
   .then((data)=> setData(data))
  },[])
  
  const displayItems = data
  .filter((item)=> 
    item.itemTitle.includes(search.toLowerCase())
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

  function handleSearch(newSearch){
    setSearch(newSearch)
  }
  
  return (
    <div>
      <h1 className='container'>For Sale Items</h1>
      <Search handleSearch={handleSearch} />
      <ul>
        {displayItems}
        <p>hi</p>
      </ul>
    </div>
  )
}

export default PostsContainter