import React, { useEffect, useState } from 'react';
import PostCards from './PostCards';
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import './post.css'

function PostsContainter(){
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const [search, setSearch] = useState("")

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
        handleDeleteItem={handleDeleteItem}
      />
    )
  })

  function handleSearch(newSearch){
    setSearch(newSearch)
  }

  function handleDeleteItem(id){
    const updateArray = data.filter((item) => item.id === id);
    setData(updateArray)
    navigate("/")
  }
  
  return (
    <div>
      <h1 className='container'>For Sale Items</h1>
      <Search data={data} handleSearch={handleSearch} />
      <ul>
        {displayItems}
      </ul>
    </div>
  )
}

export default PostsContainter