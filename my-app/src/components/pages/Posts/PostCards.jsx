import React, {useState} from 'react';
import PostDetails from './PostDetails';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PostCards.scss';

function PostCards({ item, handleFavorite, buyerId, handleUpdate, favorites }){
  const [isDetails, setIsDetails] = useState(false)
  const { id, itemTitle, itemDescription, itemPrice, images } = item;

  function favToggle(){
    if(favorites){
      for (let i = 0; i < favorites.length; i++) {
      const fav = favorites[i].for_sale_item.id
      return id === fav ? "unFavorite" : "Favorite"
  }
  }}

  return (
    <div>
      {isDetails ? (<PostDetails setIsDetails={setIsDetails} isDetails={isDetails} item={item} handleUpdate={handleUpdate} handleFavorite={handleFavorite}/>) :
      (<div className='cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>{itemTitle}</Card.Title>
            <Card.Text><span className='green'>$$ </span>{itemPrice}</Card.Text>
            <span className='scriptHeader'>Notes from the Owner: </span><Card.Text>{itemDescription}</Card.Text>
            <Button onClick={()=>handleFavorite(id, buyerId)}>{favToggle()}</Button>
            <Button onClick={()=>setIsDetails(item)}>More Info</Button>
          </Card.Body>
        </Card>
      </div>
      )}
    </div>
  )
}

export default PostCards;