import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { addPost } from "./forSaleItemsSlice";
import "./post.css"


function Posts({userId}) {
  const [postTitle, setPostTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [images, setImages] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();
  
  function handleSubmitPost(e){
    e.preventDefault();
    const formData = ({ 
      user_id: userId,
      category_id: categoryName,
      itemTitle: postTitle,
      itemPrice: itemPrice,
      itemDescription: itemDescription,
      images: images,
    });
    if (postTitle && images) {
      console.log(images)
      fetch("/for_sale_items",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(resp=> resp.json())
      .then((data => {
        console.log(data)
        dispatch({ type: "addPost", payload: data })
      }))
      // })
      // loop through each image and use createObjectURL
    // const imagesArray = URL.createObjectURL(images)
    
    // console.log(imagesArray)
      dispatch(addPost(formData))
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
        <input 
          type="file" 
          id="fileElem"
          name="images"
          multiple = "multiple"
          accept='image/jpg, image/png'
          onChange={(e)=>{
            // freaks out once i have more than one file. when it comes to URL.createObjectURL()
            const files = e.target.files
            
            for (let i = 0; i < files.length; i++) {
              const newUrl = URL.createObjectURL(files[i])
              console.log(newUrl)
              
            }
            setImages(files)
          }}          
        />
        {/* <output name="imageThumbnails" id='result' for="image array" /> */}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Posts;