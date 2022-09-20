import React, {useContext} from 'react';
import DataContext from '../../../DataContext';
import PostCards from './PostCards';
import Search from "./Search";
import './post.css'

function PostsContainer(){
  const {saleItems, search, currentUser, setSaleItems} = useContext(DataContext);

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
    if(saleItems.length > 1){
      console.log(saleItems)
    return saleItems
      .filter((item)=> item.itemTitle.toLowerCase().includes(search.toLowerCase()))
      .filter((item)=>item.itemDescription.toLowerCase().includes(search.toLowerCase()))
    .map((item)=> {
      return(
        <PostCards 
            key={item.id} 
            item={item}
            handleUpdate={handleUpdate}
            buyerId = {currentUser.id}
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
      <h1 className='container'>For Sale Items</h1>
      <Search />
      <ul>
        {items()}
      </ul>
    </div>
  )
}

export default PostsContainer