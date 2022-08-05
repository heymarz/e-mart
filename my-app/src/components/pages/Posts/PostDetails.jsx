import React, {useEffect, useState} from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { useParams, useNavigate } from 'react-router-dom';
// import EditPost from './EditPost';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function PostDetails({user, handleDelete}){
  const [currentForSaleItems, setCurrentForSaleItems] = useState([]);
  // const [isEditing, setIsEditing] = useState(false);
  const { postTitle, itemPrice, itemDescription, category_id } = currentForSaleItems
  let {post_id} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{
    fetch(`/for_sale_items/${post_id}`)
    .then((r)=>r.json())
    .then((data)=>setCurrentForSaleItems(data))
  },[])

// console.log(currentForSaleItems)
  function handleDelete(post_id){
    fetch(`/for_sale_items/${post_id}`,{
      method: "DELETE",
    }).then(()=>{
      handleDelete(currentForSaleItems.id)
      navigate("/")
    })
  }

  return (
    <div>
      <h1>{postTitle}</h1>
      <Card.Img src="http://placeimg/com/300/300/animals" />
      <Card.Text>$${itemPrice}</Card.Text>
      <Card.Text>{category_id}<br/>{itemDescription}</Card.Text>
      {user ? <div>
        <Button>Edit</Button>
        <Button variant="outline-info" size="sm" onClick={handleDelete(post_id)}>
            <BsFillTrashFill />
        </Button>
        </div>
        :
        <Button>Click here to contact Seller</Button> 
        }
      
    </div>
  )
}

export default PostDetails