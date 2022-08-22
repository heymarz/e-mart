import React, {useEffect, useState, useContext} from 'react';
import DataContext from '../../../DataContext';
import { BsFillTrashFill } from "react-icons/bs";
import { useParams, useNavigate } from 'react-router-dom';
import EditPost from './EditPost';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function PostDetails(){
  let {forSaleItemId} = useParams();
  const [currentForSaleItems, setCurrentForSaleItems] = useState({user: {}});
  const { itemTitle, itemPrice, itemDescription, user } = currentForSaleItems
  const [isEditing, setIsEditing] = useState(false);
  const {currentUser} = useContext(DataContext)
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
    return (<Card.Img className="images" src={img} key={index} alt={img}/>)
  });
    return displayImgs
    }else{
      return (<p>image Error</p>)
    }
  }

  function renderContact(){
    if(currentUser === user){
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
          <Carousel>
            {renderImgs()}
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