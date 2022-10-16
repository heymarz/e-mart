import React, {useState, useEffect} from 'react'
import PostCards from './PostCards';

function OwnPost() {
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch('/saleItems')
    .then(r=> r.json())
    .then((data)=> {
    if(data){
        setItems(data);
      }
    })
  },[])

  
  function ownSales(){
    if(items.length > 0){
      return items.map((item,index)=>{
        const seller = item.seller
        item.item.seller = seller
        return <PostCards key={index} item={item.item} />
        }
      )
    }else{
      return <p>Looks like you don't have any posted sale items yet!</p>
    }
  }
  return (
    <div>
      <h1 className='header'>Your Sales post:</h1>
      <div className='card-container'>
        {ownSales()}
      </div>
    </div>
  )
}

export default OwnPost