import React, {useState, useContext} from 'react';
import DataContext from '../../../DataContext';
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import EditPost from './EditPost';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function PostDetails({ isDetails, setIsDetails, favToggle}){
  const { id, title, images, price, description, seller }= isDetails;
  const {currentUser, handleFavorite, handleUpdate} = useContext(DataContext)
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const imgs = images.split(", ");
  
  function handleDeleteSalesItem(){
    fetch(`/items/${id}`,{
      method: "DELETE",
    }).then(()=>{
      handleUpdate(id)
      navigate(0)
    })
  }
console.log(isDetails)
  function renderContact(){
    if(currentUser && seller){
      if(seller.id === currentUser.id){
        return (<div>
          <Button onClick={()=>setIsEditing(isDetails)}>Edit</Button>
          <Button variant="outline-info" size="sm" onClick={()=>{handleDeleteSalesItem(id)}}> 
              <BsFillTrashFill />
          </Button> 
          </div>
        )
      }else{
        return (
        <div>
          <Button onClick={()=>setIsDetails(false)}>Minimize</Button>
          <Button onClick={()=>handleFavorite(id, currentUser.id)}>{favToggle()}</Button>
          <a href={`mailto:${seller.email}?subject=${title}`}>Click here to contact Seller</a>
        </div>)
      }}
    }

  return (
    <div className='text-container'>
      {isEditing ? (<EditPost editPost={isEditing} setIsEditing={setIsEditing} setIsDetails={setIsDetails} />) : 
        isDetails ? 
        (<div>
          <h1>{title}</h1>
          <Carousel infiniteLoop showThumbs>
            {imgs.map((img)=>{
              return (<img className="images" src={img} key={img} alt={img}/>)})}
          </Carousel>
          <Card.Text>Asking Price:<span className='green'> $ </span>{price}</Card.Text>
          <Card.Text><span className='scriptHeader'>Owner Comments: </span><span className='commentBox'>{description}</span></Card.Text>
          {renderContact()}    
        </div>
        ) : null }
      </div>
      
  )
}

export default PostDetails