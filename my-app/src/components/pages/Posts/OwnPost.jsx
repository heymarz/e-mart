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
        return <PostCards key={index} item={item.item} />
        }
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