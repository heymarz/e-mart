import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function PostCards({ item, handleDeleteItem }){
  const { id, itemTitle, itemDescription, itemPrice, user_id } = item


  function handleDeleteClick(e){
    e.preventDefault()
    fetch(`/for_sale_items/${id}`,{
      method: "DELETE"
    });
    handleDeleteItem(id)
  }
  return (
    <div className='cards'>
      {/* <h2>  </h2>
      <p></p>
      <p></p>
      <button onClick={handleDeleteClick}><BsFillTrashFill /></button> */}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{itemTitle}</Card.Title>
        <Card.Text>{itemPrice}</Card.Text>
        <Card.Text>{itemDescription}</Card.Text>
        <Button variant="primary"onClick={handleDeleteClick}><BsFillTrashFill /></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PostCards;