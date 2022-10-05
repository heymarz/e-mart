import React, {useEffect,  useState} from 'react';
import PostCards from './Posts/PostCards';

function Favorites(){
  const [favArray, setFavArray] = useState([]);

  useEffect(()=>{
    fetch("/favorites")
    .then(r=>r.json())
    .then(f => setFavArray(f))
  },[])

  function wishList(){
    if(favArray){
       return favArray.map((fav,index)=>{
        return <PostCards key={index} item={fav.item}/>})
      }else{
        return <p>You will see your sale items here.</p>
      }
  }

 
        
  return (
    <div>
        <h2 className='headers'>Wishlist:</h2>
      <div className='card-container'>
        {wishList()}
      </div>
    </div>
  )
}

export default Favorites