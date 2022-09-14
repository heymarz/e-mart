import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PostCards.scss';
import PostDetails from './PostDetails';

function PostCards({ item, handleFavorite, buyerId, handleUpdate }){
  const [isDetails, setIsDetails] = useState(false)
  const { id, itemTitle, itemDescription, itemPrice, images } = item;

  return (
    <div>
      {isDetails ? (<PostDetails setIsDetails={setIsDetails} isDetails={isDetails} item={item} handleUpdate={handleUpdate} />) :
      (<div className='cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>{itemTitle}</Card.Title>
            <Card.Text><span className='green'>$$ </span>{itemPrice}</Card.Text>
            <span className='scriptHeader'>Notes from the Owner: </span><Card.Text>{itemDescription}</Card.Text>
            <Button onClick={()=>handleFavorite(id, buyerId)}>Put toggle FAV</Button>
            <Button onClick={()=>setIsDetails(item)}>More Info</Button>
          </Card.Body>
        </Card>
      </div>
      )}
    </div>
  )
}

export default PostCards;