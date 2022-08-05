import React, {useState, useEffect} from 'react';
import "./post.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import PostCards from './PostCards';
import { storage } from "../../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function PostInput({user}) {
  const [itemTitle, setItemTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [images, setImages] = useState(null);
  const [categoryName, setCategoryName] = useState(""); 
  const [chosenCategory, setChosenCategory] = useState("");
  const [favorite, setFavorite] = useState(false)
  const [imageUrl, setImageUrl] = useState([])

  // const forSaleItemsArray = fetch('/for_sale_items',{
  //   method: "GET",
  //   headers: {
  //     'content-type': 'application/json',
  //     'accept': 'application/json'
  //   }
  //   .then(r =>r.json())
  //   .then((saleItems)=>)
  // })

  useEffect(()=>{
    fetch('/categories',{
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then((r)=>r.json())
    .then((data)=>setCategoryName(data))
  },[])
  
  // const ownItemsArray = user && selectAllPosts
  // .filter((item)=>{
  //   return user.id === item.user_id})
  // .map((item)=> {
  //     return(
  //       <PostCards 
  //         key={item.id} 
  //         item={item}
  //       />
  //     )
  //   })

  function handleSubmitPost(e){
    e.preventDefault();
    const formData = ({ 
      user_id: user.id,
      category_id: chosenCategory,
      itemTitle: itemTitle,
      itemPrice: itemPrice,
      itemDescription: itemDescription,
      images: images,
    });
    if (itemTitle && images) {
        fetch("/for_sale_items",{
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData)
      })
      .then((r)=> r.json())
      .then((data) => {
        console.log(data)
    })
    setItemTitle('');
    setItemPrice('');
    setItemDescription('');
    setImages(null);
    setCategoryName('');
  }
  }
  
  const imageListRef = ref(storage, "images/")
  function uploadImages(){
    if (images == null) return;
    const imageRef = ref(storage,`images/${images.name + v4()}`);
    uploadBytes(imageRef, images).then((snaphsot)=>{
      getDownloadURL(snaphsot.ref).then(url =>{
        setImageUrl((prev)=> [...prev, url])
      })
    })
  }
  
    useEffect(()=>{
      listAll(imageListRef).then((r)=>{
        r.items.forEach((item)=>{
          getDownloadURL(item).then((url)=> {
            setImageUrl((prev)=> [...prev, url])
          })
        })
      })
    },[])
  
  return (
    <div className="new-post">
      <h1 className='header'>Add a new posting</h1>
      <Form id="newPostForm" onSubmit={handleSubmitPost}>
        <Form.Group className="ms-5" controlId="formGroupUserId">
          <Form.Control 
            type="hidden"
            name="userId"
            value="user.id"
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupPostTitle">
          <Form.Label>Post Title: </Form.Label>
          <Form.Control 
            type='text'
            name='itemTitle'
            value={itemTitle}
            onChange={(e)=>setItemTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupItemPrice">
          <Form.Label>Asking Price: </Form.Label>
          <Form.Control
            type='number'
            name='itemprice'
            value={itemPrice}
            onChange={(e)=>setItemPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupItemDescription">
          <Form.Label>Item Description: </Form.Label>
          <Form.Control
            type='textarea'
            name='itemDescription'
            value={itemDescription}
            onChange={(e)=>setItemDescription(e.target.value)}
          />
        </Form.Group>
            <DropdownButton 
              className = "ms-5 mt-3"
              id = "dropdown-category-button" 
              title = {categoryName && categoryName.filter((category) => category.id === chosenCategory
                )} 
             onSelect={(e)=>setChosenCategory(e)}>
              { 
                categoryName && categoryName.map((cat)=>{
                    return(
                      <Dropdown.Item eventKey={cat.id} key={cat.id}>{cat.categoryName}</Dropdown.Item>
                    )
                  })
              }
            </DropdownButton>
          <Form.Group className="ms-5 mt-3" controlId="formGroupImages">
            <Form.Control 
              type="file"
              name="images"
              multiple = "multiple"
              accept='image/jpg, image/png'
              onChange={(e)=>{setImages(e.target.files)}}
            />
          <Form.Label>
            <Form.Control 
              type="hidden" 
              value="false"
              ref={x => {setFavorite(false)}}
              />
          </Form.Label>
          </Form.Group>
          <Button onClick={uploadImages} type='submit' className='ms-5 mt-2'>Submit</Button>
          {imageUrl.map((url, index)=>{
            return <img src={url} key ={index} />
          })}
      </Form>
      <h3>My Selling List:</h3>
      {/* {ownItemsArray} */}
    </div>
  )
}

export default PostInput;