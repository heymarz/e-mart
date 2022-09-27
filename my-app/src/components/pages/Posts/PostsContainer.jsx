import React, {useContext} from 'react';
import DataContext from '../../../DataContext';
import PostCards from './PostCards';
import Search from "./Search";
import './post.css'

function PostsContainer(){
  const {saleItems, search, setSaleItems} = useContext(DataContext);

  function handleUpdate(forSaleItem_id, category_id,itemDescription, itemPrice, itemTitle, images){
    const copy = [...saleItems];
    for (const saleItem of copy){
      if(saleItem.id === forSaleItem_id){
        saleItem.itemTitle = itemTitle;
        saleItem.itemPrice = itemPrice;
        saleItem.itemDescription = itemDescription;
        saleItem.category_id = category_id;
        saleItem.images = images;
      }
    } 
    setSaleItems(copy)
  }
  
  function items(){
    if(saleItems){
      return saleItems.filter((item)=> item.itemTitle.toLowerCase().includes(search.toLowerCase()) || item.itemDescription.toLowerCase().includes(search.toLowerCase()))
    .map((item)=> {
      return(
        <PostCards 
            key={item.id} 
            item={item}
            handleUpdate={handleUpdate}
          />
      )
    })
  }else{
    return <div>
      <h3 className='error-message'>No Matches were found</h3>
     <p><b>Try another key word.</b></p> </div>
  }}
  
  return (
    <div>
      <h1>For Sale Items</h1>
      <Search />
      <ul className='card-container'>
        {items()}
      </ul>
    </div>
  )
}

export default PostsContainer