import React, {useContext} from 'react';
import DataContext from '../../../DataContext';
import PostCards from './PostCards';
import Search from "./Search";
import './post.css'

function PostsContainer(){
  // const [items, setItems] = useState([])
  const {saleItems, search, setSaleItems} = useContext(DataContext);

  // useEffect(()=>{
  //   fetch('/saleItems')
  //   .then(r=> r.json())
  //   .then((data)=> {
  //   if(data){
  //       setItems(data);
  //     }
  //   })
  // },[loggedin, setItems])


  function handleUpdate(forSaleItem_id, category_id, description, price, title, images){
    const copy = [...saleItems];
    for (const saleItem of copy){
      if(saleItem.id === forSaleItem_id){
        saleItem.title = title;
        saleItem.price = price;
        saleItem.description = description;
        saleItem.category_id = category_id;
        saleItem.images = images;
      }
    } 
    setSaleItems(copy)
  }
  
  function displayItems(){
    if(saleItems){
      return saleItems.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()))
    .map((item)=> {
      return(
        <PostCards 
            key={item.id} 
            item={item}
            handleUpdate={handleUpdate}
          />
      )
    })
  }else{
    return <div>
      <h3 className='error-message'>No Matches were found</h3>
     <p><b>Try another key word.</b></p> </div>
  }}
  
  return (
    <div>
      <h1>For Sale Items</h1>
      <Search />
      <ul className='card-container'>
        {displayItems()}
      </ul>
    </div>
  )
}

export default PostsContainer