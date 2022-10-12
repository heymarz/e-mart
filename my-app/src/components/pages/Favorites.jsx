import React, {useContext} from 'react';
import DataContext from "../../DataContext"
import PostCards from './Posts/PostCards';

function Favorites(){
  const {favorites} = useContext(DataContext)

  function wishList(){
    if(favorites.length > 0){
       return favorites.map((fav,index)=>{
        return <PostCards key={index} item={fav.item}/>})
      }else{
        return <p>You will see your sale items here.</p>
      }
  }
        
  return (
    <div>
      <h1 className='headers'>Wishlist:</h1>
      <div className='card-container'>
        {wishList()}
      </div>
    </div>
  )
}

export default Favorites