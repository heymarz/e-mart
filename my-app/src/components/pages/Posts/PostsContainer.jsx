import React, {useContext} from 'react';
import DataContext from '../../../DataContext';
import PostCards from './PostCards';
import Search from "./Search";
import './post.css'

function PostsContainer(){
  const {saleItems, search} = useContext(DataContext);
  
  function displayItems(){
    if(saleItems){
      return saleItems.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()))
      .map((item)=> {
      return(
        <PostCards 
            key={item.id} 
            item={item}
        />
      )
    })
  }else{
    return (
      <div>
        <h3 className='error-message'>No Matches were found</h3>
        <p><b>Try another key word.</b></p> 
      </div>
    )
  }}
  
  return (
    <div>
      <h1 className='header'>For Sale Items</h1>
      <Search />
      <ul className='card-container'>
        {displayItems()}
      </ul>
    </div>
  )
}

export default PostsContainer