import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PostCards.scss';
// import Form from "react-bootstrap/Form";

function PostCards({ item, showDetails }){
  // const [favorite, setFavorite] = useState("")
  const { id, itemTitle, itemDescription, itemPrice } = item

  // function handleFavorite(e){
  //   e.preventDefault();
  //   setFavorite()
  //   console.log(e)
  // }
  

  return (
    <div className='cards'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="http://placeimg.com/300/300/animals" />
        <Card.Body>
          <Card.Title>{itemTitle}</Card.Title>
          <Card.Text>{itemPrice}</Card.Text>
          <Card.Text>{itemDescription}</Card.Text>
          {/* <Button onClick={handleFavorite}>Favorite</Button> */}
          <Button onClick={()=>showDetails(id)}>More Info</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PostCards;