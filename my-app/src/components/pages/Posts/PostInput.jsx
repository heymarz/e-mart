import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { addPost } from "./forSaleItemsSlice";
import "./post.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown';


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
            name='postTitle'
            value={postTitle}
            onChange={(e)=>setPostTitle(e.target.value)}
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
          <Form.Group className="ms-5" controlId="formGroupCategoryName"> 
            <Form.Label>Category: </Form.Label>
              <Dropdown.Menu onChange={(e)=>setCategoryName(e.target.value)}>
                <Dropdown.Item>Choose from the drop down list </Dropdown.Item>
                <Dropdown.Item eventKey="1" >Kitchen</Dropdown.Item>
                <Dropdown.Item eventKey="2">Household Applicances</Dropdown.Item>
                <Dropdown.Item eventKey="3">Furniture</Dropdown.Item>
                <Dropdown.Item eventKey="4">Computer & Accessories</Dropdown.Item>
              </Dropdown.Menu>
          </Form.Group> 
          <Form.Group className="ms-5" controlId="formGroupImages">
            <Form.Control 
              type="file"
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
          </Form.Group>
          <Button type='submit' className='ms-5 mt-2'>Submit</Button>
      </Form>
    </div>
  )
}

export default PostInput;