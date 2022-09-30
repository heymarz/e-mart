import React, {useContext} from 'react';
import DataContext from '../../DataContext';
import PostCards from './Posts/PostCards';

function Favorites(){
  const { favorites } = useContext(DataContext);

  function wishList(){
    console.log(`favorites ${JSON.stringify(favorites,null,2)}`);
    if(favorites){
      return favorites.map((item,index)=>{
        return <PostCards key={index} item={item.for_sale_item}/>})
      }else{
        return <p>You will see your sale items here.</p>
      }
  }

 
        
  return (
    <div>

        <h2>Wishlist:</h2>
      <div className='card-container'>
        {wishList()}
      </div>
    </div>
  )
}

export default Favorites