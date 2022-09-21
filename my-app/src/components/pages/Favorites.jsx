import React, {useContext} from 'react';
import DataContext from '../../DataContext';
import PostCards from './Posts/PostCards';

function Favorites(){
  const { saleItems, favorites, currentUser } = useContext(DataContext);

  function wishList(){
    if(saleItems){
      const copy = [...saleItems]
      return copy.filter((saleitem)=>{
          return favorites.map((fav)=>fav.for_sale_item_id === saleitem.id)
      })
      .map((item,index)=>{
            return <PostCards key={index} item={item}/>
          })
          }else{
            <p>You will see your sale items here.</p>
        }}

  function ownSales(){
    if(currentUser.id){
      return currentUser.for_sale_items.map((item,index)=>{
        return(
          <PostCards key={index} item={item} />
        )}
      )
    }else{
      return <p>Looks like you are not following any items yet!</p>
    }
  }
        
  return (
    <div>
      <h1 className='header'>Watching Items:</h1>
        <h2>Your Sales post:</h2>
      <div className='card-container'>
        {ownSales()}
      </div>
        <h2>Wishlist:</h2>
      <div className='card-container'>
        {wishList()}
      </div>
    </div>
  )
}

export default Favorites