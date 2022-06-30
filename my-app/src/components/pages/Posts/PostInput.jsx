import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { fetchNewPost } from "./forSaleItemsSlice";

function Posts({userId}) {
  const [postTitle, setPostTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [image, setImage] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();
  
  function handleSubmitPost(e){
    e.preventDefault();
    dispatch(fetchNewPost({
      user_id: userId,
      category_id: categoryName,
      itemTitle: postTitle,
      itemPrice: itemPrice,
      itemDescription: itemDescription,
      image,
    }))
  }
  

  return (
    <div className="new-post">
      <h1 className='header'>Add a new posting</h1>
      <form onSubmit={handleSubmitPost}>
        <label htmlFor='item-title'>Post Title: </label>
        <input 
          type='text'
          name='postTitle'
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}
        />
        <br />
        <label htmlFor='item-price'>Asking Price: </label>
        <input
          type='number'
          name='itemprice'
          value={itemPrice}
          onChange={(e)=>setItemPrice(e.target.value)}
        />
        <br />
        <label htmlFor='item-description'>Item Description: </label>
        <input
          type='textarea'
          name='itemDescription'
          value={itemDescription}
          onChange={(e)=>setItemDescription(e.target.value)}
        />
        <br />
        <label htmlFor="type">Category: </label>
        <select onChange={(e)=>setCategoryName(e.target.value)}>
          <option>Choose from the drop down list </option>
          <option value={categoryName.kitchen} >Kitchen</option>
          <option value={categoryName.householdApplicances}>Household Applicances</option>
          <option value={categoryName.furniture}>Furniture</option>
          <option value={categoryName.computerAndAccessories}>Computer & Accessories</option>
        </select>
        <br />
        {/* need to put in active storage */}
        <input 
          type="file" 
          name="image"
          multiple
          onChange={(e)=>setImage(e.target.files)}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Posts;