import React, {useContext} from 'react';
import DataContext from '../../DataContext';
import PostCards from './Posts/PostCards';

function Favorites({favorites}){
  const { saleItems, currentUser } = useContext(DataContext);

  function ownSales(){
    if(saleItems){
      const copy = [...saleItems]
     return copy
      .filter((saleitem)=>saleitem.seller_id === currentUser.id)
        .map((item)=>{
          return(
            <PostCards key={item.id}item={item}/>
          )
        })
        }else{
          <p>You will see your sale items here.</p>
        }}

  function wishList(){
    if(favorites){
      return favorites.map((item,index)=>{
        return(
          <PostCards key={index} item={item.for_sale_item} />
        )}
      )
    }else{
      return <p>Looks like you are not watching any items yet!</p>
    }
  }
        
  return (
    <div>
      <h1 className='header'>Watching Items:</h1>
      <h2 className="container">Your Sales post:</h2>
        {ownSales()}
      <h2>Wishlist:</h2>
        {wishList()}
    </div>
  )
}

export default Favorites