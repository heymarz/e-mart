import React, {useEffect, useState} from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { useParams, useNavigate } from 'react-router-dom';
import EditPost from './EditPost';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function PostDetails({user, onUpdatePost}){
  let {forSaleItemId} = useParams();
  const [currentForSaleItems, setCurrentForSaleItems] = useState({});
  const { itemTitle, itemPrice, itemDescription, category_id } = currentForSaleItems
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`/for_sale_items/${forSaleItemId}`)
    .then((r)=>r.json())
    .then((data)=> setCurrentForSaleItems(data))
  },[])
  
  function handleDelete(forSaleItemId){
    fetch(`/for_sale_items/${forSaleItemId}`,{
      method: "DELETE",
    }).then(()=>{
      handleDelete(currentForSaleItems.id)
      navigate("/")
    })
  }

  function renderImgs(){
    if(currentForSaleItems.images){
      const imgs = currentForSaleItems.images.split(", ");
      const displayImgs = imgs.map((img, index)=>{
    return (
      <div>
        <Card.Img src={img} key={index} alt={img}/>
      </div>
    )
  });
    return displayImgs
    }else{
      return null
    }
  }

  function renderContact(){
    if(currentForSaleItems.user === user){
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
      {isEditing ? (<EditPost editPost={isEditing} setIsEditing={setIsEditing} onUpdatePost={onUpdatePost} currentForSaleItems={currentForSaleItems}/>) : (<div>
      <h1>{itemTitle}</h1>
      <Carousel>
        {renderImgs()}
      </Carousel>
      <Card.Text>$${itemPrice}</Card.Text>
      <Card.Text>{category_id}<br/>{itemDescription}</Card.Text>
      {renderContact()}</div>)}
      </div>
      
  )
}

export default PostDetails