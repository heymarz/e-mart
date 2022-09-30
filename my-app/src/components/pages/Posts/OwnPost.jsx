import React, {useContext} from 'react'
import DataContext from '../../../DataContext';
import PostCards from './PostCards';

function OwnPost() {
  const {currentUser} = useContext(DataContext)

  function ownSales(){
    console.log(`for_sale_items ${JSON.stringify(currentUser.for_sale_items,null,2)}`);
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
    </div>
  )
}

export default OwnPost