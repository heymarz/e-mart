import React, {useEffect, useState} from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import EditPost from './EditPost';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function PostDetails(){
  const {forSaleItemId} = useParams();
  const [currentForSaleItems, setCurrentForSaleItems] = useState({user: {}, images: ""});
  const { itemTitle, itemPrice, itemDescription, user_id, user } = currentForSaleItems
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`/for_sale_items/${forSaleItemId}`)
    .then((r)=>r.json())
    .then((data)=> {
      setCurrentForSaleItems(data)})
  },[])

  const imgs = currentForSaleItems.images.split(", ");
  
  function handleDelete(){
    fetch(`/for_sale_items/${forSaleItemId}`,{
      method: "DELETE",
    }).then(()=>{
      handleDelete(forSaleItemId)
      navigate("/")
    })
  }
  
  function renderContact(){
    if(user.id === user_id){
      return (<div>
        <Button onClick={()=>setIsEditing(currentForSaleItems)}>Edit</Button>
        <Button variant="outline-info" size="sm" onClick={()=>{handleDelete(forSaleItemId)}}> 
            <BsFillTrashFill />
        </Button> 
      </div>
      )
    }
    else{
      return (<div><a href={`mailto:${currentForSaleItems.user.email}?subject=${currentForSaleItems.itemTitle}`}>Click here to contact Seller</a></div>)
    }
  }

  return (
    <div className='text-container'>
      {isEditing ? (<EditPost editPost={isEditing} setIsEditing={setIsEditing} currentForSaleItems={currentForSaleItems}/>) : (<div>
          <h1>{itemTitle}</h1>
          <Carousel infiniteLoop showThumbs>
          {imgs.map((img, index)=>{
        return (<img className="images" src={img} key={index} alt={img}/>)})}
          </Carousel>
          <Card.Text>Asking Price:<span className='green'> $ </span>{itemPrice}</Card.Text>
          <Card.Text><span className='scriptHeader'>Owner Comments: </span><span className='commentBox'>{itemDescription}</span></Card.Text>
          {renderContact()}    
        </div>
        )}
      </div>
      
  )
}

export default PostDetails