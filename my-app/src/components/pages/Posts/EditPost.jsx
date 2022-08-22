import React, {useState, useEffect, useContext} from 'react';
import DataContext from '../../../DataContext';
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import { storage } from "../../../firebase";
import { ref, listAll, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function EditPost({ editPost, setIsEditing }) {
  const { itemTitle, itemPrice, itemDescription, images, category_id, id } = editPost;
  const [postTitle, setpostTitle] = useState(itemTitle);
  const [price, setPrice] = useState(itemPrice)
  const [description, setDescription] = useState(itemDescription);
  const [categoryName, setCategoryName] = useState({});
  const [chosenCategory, setChosenCategory] = useState(category_id);
  const {handleUpdate} = useContext(DataContext)
  const navigate = useNavigate();
  //images need to be split then placed in state
  const imageArray = images.split(", ")
  const [imagesList, setImagesList] = useState(imageArray);

  useEffect(()=>{
    fetch('/categories')
    .then((r)=>r.json())
    .then((data)=>setCategoryName(data))
  },[])

  function handleUpdatePost(e){
    e.preventDefault();
    const formData = ({
      itemTitle: postTitle,
      itemPrice: price,
      itemDescription: description,
      images: imagesList,
      category_id: chosenCategory
  })
  console.log(formData)
    fetch(`/for_sale_items/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((currentPost)=>{
      console.log(currentPost)
      handleUpdate(currentPost.id, category_id, currentPost.itemDescription, currentPost.itemPrice, currentPost.images, currentPost.itemTitle);
      setIsEditing(false)
      navigate(-1)
  })
  }

  function handleImgInput(e){
    const imageListRef = ref(storage, "images/");
    const imageUploadArray = []
    for(const imageUpload of e.target.files){
       const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            listAll(imageListRef).then((response) => {
                response.items.filter((item) => {
                    if (item.name === imageRef.name) {
                        getDownloadURL(item).then((url) => {
                          imageUploadArray.push(url)
                          const joinArray = imageUploadArray.join(', ' )
                          setImagesList(joinArray);
                        });
                      }
                      return null;
                    });
                  });
      });
    }}

  return (
    <Form id="newPostForm" onSubmit={handleUpdatePost}>
        <Form.Group className="ms-5" controlId="formGroupUserId">
          <Form.Control 
            type="hidden"
            name="userId"
            value="user.id"
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGrouppostTitle">
          <Form.Label>Post Title: </Form.Label>
          <Form.Control 
            type='text'
            name='postTitle'
            value={postTitle}
            onChange={(e)=>setpostTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupItemPrice">
          <Form.Label>Asking Price: </Form.Label>
          <Form.Control
            type='number'
            name='itemprice'
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupItemDescription">
          <Form.Label>Item Description: </Form.Label>
          <Form.Control
            type='textarea'
            name='itemDescription'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </Form.Group>
            <DropdownButton 
              className = "ms-5 mt-3"
              id = "dropdown-category-button" 
              title = {categoryName && categoryName.filter((category) => category.id === chosenCategory
                )} 
             onSelect={(e)=>setChosenCategory(e)}
             >
              { 
                categoryName && categoryName.map((cat)=>{
                    return(
                      <Dropdown.Item eventKey={cat.id} key={cat.categoryName}>{cat.categoryName}</Dropdown.Item>
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
              onChange={handleImgInput}
            />
          <Form.Label html="favorite">
            <Form.Control 
            type="hidden" 
            value="false"
            // ref={x => {setFavorite(false)}}
              />
          </Form.Label>
          </Form.Group>
          <Button type='submit' className='ms-5 mt-2'>Update!</Button>
      </Form>
  )
}

export default EditPost