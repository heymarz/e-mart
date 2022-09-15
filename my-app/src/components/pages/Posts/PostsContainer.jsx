import React, {useContext} from 'react';
import DataContext from '../../../DataContext';
import PostCards from './PostCards';
import Search from "./Search";
import './post.css'

function PostsContainer({ handleFavorite, favorites }){
  const {saleItems, handleSearch, search, currentUser, setSaleItems} = useContext(DataContext);

  function handleUpdate(forSaleItem_id, category_id,itemDescription, itemPrice, itemTitle, images){
    const copy = [...saleItems];
    for (const saleItem of copy){
      if(saleItem.id === forSaleItem_id){
        saleItems.itemTitle = itemTitle;
        saleItem.itemPrice = itemPrice;
        saleItem.itemDescription = itemDescription;
        saleItem.category_id = category_id;
        saleItems.images = images;
      }
    } 
    setSaleItems(copy)
  }
    
  function items(){
    if(saleItems){
      
    return saleItems
      .filter((item)=> 
      item.itemTitle.includes(search.toLowerCase())
    )
    .map((item)=> {
      return(
        <PostCards 
            key={item.id} 
            item={item}
            favorites={favorites}
            handleFavorite={handleFavorite}
            handleUpdate={handleUpdate}
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

export default PostsContainer