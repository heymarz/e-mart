import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { storage } from "../../../firebase";
import { ref, listAll, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function EditPost({ editPost, setIsEditing, handleUpdate, setIsDetails }) {
  const { title, price, description, images, category_id, id } = editPost;
  const [postTitle, setpostTitle] = useState(title);
  const [itemPrice, setItemPrice] = useState(price)
  const [itemDescription, setItemDescription] = useState(description);
  const [categoryName, setCategoryName] = useState("");
  const [chosenCategory, setChosenCategory] = useState(category_id);
  const navigate = useNavigate();
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
      title: postTitle,
      price: itemPrice,
      description: itemDescription,
      images: imagesList.toString(),
      category_id: chosenCategory
  })
 
    fetch(`/items/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((currentPost)=>{
      handleUpdate(currentPost.id, category_id, currentPost.description, currentPost.price, currentPost.images, currentPost.title);
      setIsEditing(false)
      setIsDetails(false)
      navigate(0)
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

    function renderImgs(){
      if(imageArray){
        const displayImgs = imageArray.map((img, index)=>{
          return (<img className="thumbnail" src={img} key={img+v4()} alt={img}/>)
        });
        return displayImgs
      }else{
        return (<p>image Error</p>)
      }
    }

  return (
    <Form id="newPostForm" onSubmit={handleUpdatePost}>
        {/* <Form.Group className="ms-5" controlId="formGroupUserId">
          <Form.Control 
            type="hidden"
            name="userId"
            value="user.id"
          />
        </Form.Group> */}
        <Form.Group className="ms-5" controlId="formGrouppostTitle">
          <Form.Label>Post Title: </Form.Label>
          <Form.Control 
            type='text'
            name='postTitle'
            value={postTitle}
            onChange={(e)=>setpostTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupPrice">
          <Form.Label>Asking Price: </Form.Label>
          <Form.Control
            type='number'
            name='price'
            value={itemPrice}
            onChange={(e)=>setItemPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupItemDescription">
          <Form.Label>Item Description: </Form.Label>
          <Form.Control
            type='textarea'
            name='description'
            value={itemDescription}
            onChange={(e)=>setItemDescription(e.target.value)}
          />
        </Form.Group>
        <label className = "ms-5 mt-3">Please Choose a category</label>
            <select 
              className = "ms-5 mt-3"
              id = "mySelect" 
              value={chosenCategory ? chosenCategory : chosenCategory===categoryName.id}
              onChange={(e)=>{setChosenCategory(e.target.value)}}
             >
              { 
                categoryName && categoryName.map((cat)=>{
                    return(
                      <option value={cat.id} key={cat.categoryName}>{cat.category_name}</option>
                    )
                  })
              }
            </select>
          <Form.Group className="ms-5 mt-3" controlId="formGroupImages">
            <Form.Control 
              type="file"
              name="images"
              multiple = "multiple"
              accept='image/jpg, image/png'
              onChange={handleImgInput}
            />
            {renderImgs()}
          </Form.Group>
          <Button type='submit' className='ms-5 mt-2'>Update!</Button>
      </Form>
  )
}

export default EditPost