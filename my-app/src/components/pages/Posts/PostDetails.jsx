import React, {useState, useContext} from 'react';
import DataContext from '../../../DataContext';
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import EditPost from './EditPost';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function PostDetails({handleFavorite, handleUpdate, isDetails, setIsDetails}){
  const {id, itemTitle, images, itemPrice, itemDescription, seller_id, seller} = isDetails
  const {currentUser} = useContext(DataContext)
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const imgs = images.split(", ");
  
  function handleDeleteSalesItem(){
    fetch(`/for_sale_items/${id}`,{
      method: "DELETE",
    }).then(()=>{
      handleUpdate(id)
      navigate(0)
    })
  }
  
  function renderContact(){
    if(currentUser){
      if(currentUser.id === seller_id){
        return (<div>
          <Button onClick={()=>setIsEditing(isDetails)}>Edit</Button>
          <Button variant="outline-info" size="sm" onClick={()=>{handleDeleteSalesItem(id)}}> 
              <BsFillTrashFill />
          </Button> 
          </div>
        )
      }
      else{
        return (
        <div>
          <Button onClick={()=>handleFavorite(id, currentUser.id)}>Favorite</Button>
          <a href={`mailto:${seller.email}?subject=${itemTitle}`}>Click here to contact Seller</a>
          <Button onClick={()=>setIsDetails(false)}>Minimize</Button>
        </div>)
      }}
  }

  return (
    <div className='text-container'>
      {isEditing ? (<EditPost editPost={isEditing} setIsEditing={setIsEditing} isEditing={isDetails} handleUpdate={handleUpdate} setIsDetails={setIsDetails} />) : isDetails ? (<div>
          <h1>{itemTitle}</h1>
          <Carousel infiniteLoop showThumbs>
          {imgs.map((img, index)=>{
        return (<img className="images" src={img} key={index} alt={img}/>)})}
          </Carousel>
          <Card.Text>Asking Price:<span className='green'> $ </span>{itemPrice}</Card.Text>
          <Card.Text><span className='scriptHeader'>Owner Comments: </span><span className='commentBox'>{itemDescription}</span></Card.Text>
          {renderContact()}    
        </div>
        ) : null }
      </div>
      
  )
}

export default PostDetails