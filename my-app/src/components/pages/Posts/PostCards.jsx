import React, {useState, useContext} from 'react';
import DataContext from '../../../DataContext';
import PostDetails from './PostDetails';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PostCards.scss';

function PostCards({ item, handleUpdate}){
  const [isDetails, setIsDetails] = useState(false);
  const { currentUser, handleFavorite, favorites } = useContext(DataContext)
  const { id, title, description, price, images } = item;

  function favToggle(){
    if(favorites && item){
      const fav = favorites.find((fav)=>fav.item_id === item.id)
      return fav ? "unFavorite" : "Favorite"
  }}

  return (
    <div>
      {isDetails ? (<PostDetails setIsDetails={setIsDetails} isDetails={isDetails} handleUpdate={handleUpdate}  favToggle={favToggle}/>) :
      (<div className='cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text><span className='green'>$$ </span>{price}</Card.Text>
            <span className='scriptHeader'>Notes from the Owner: </span><Card.Text>{description}</Card.Text>
            <Button onClick={()=>handleFavorite(id, currentUser.id)}>{favToggle()}</Button>
            <Button onClick={()=>setIsDetails(item)}>More Info</Button>
          </Card.Body>
        </Card>
      </div>
      )}
    </div>
  )
}

export default PostCards;