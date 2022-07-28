import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { addPost } from "./forSaleItemsSlice";
import "./post.css";

function PostInput({user}) {
  const [postTitle, setPostTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [images, setImages] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  function handleSubmitPost(e){
    e.preventDefault();
    const formData = ({ 
      user_id: user.id,
      category_id: categoryName,
      itemTitle: postTitle,
      itemPrice: itemPrice,
      itemDescription: itemDescription,
      images: images,
    });
    if (postTitle && images) {
        fetch("/for_sale_items",{
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData)
      })
      .then(r=> r.json())
      .then((data) => {
        // console.log(data)
        return dispatch(addPost(data))
      })
    };
    // setPostTitle(''),
    // setItemPrice(''),
    // setItemDescription(''),
    // setImage([]),
    // setCategoryName('')
  }

  return (
    <div className="new-post">
      <h1 className='header'>Add a new posting</h1>
      <form id="newPostForm" onSubmit={handleSubmitPost}>
        <label htmlFor='item-title'>Post Title: </label>
        <label html="userId">
          <input 
            type="hidden"
            name="userId"
            value="user.id"

          />
        </label>
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
          <option value={1} >Kitchen</option>
          <option value={2}>Household Applicances</option>
          <option value={3}>Furniture</option>
          <option value={4}>Computer & Accessories</option>
        </select>
        <br />
        <input 
          type="file" 
          className='chosen-images'
          name="images"
          multiple = "multiple"
          accept='image/jpg, image/png'
          onChange={(e)=>{
            const img = e.target.files     
            const imgs = []   
            for (let i = 0; i < img.length; ++i) {
              const newUrl = URL.createObjectURL(img[i])
              imgs.push(newUrl)
            }
            setImages(imgs)          
          }}
        />
        <output className='output'></output>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default PostInput;