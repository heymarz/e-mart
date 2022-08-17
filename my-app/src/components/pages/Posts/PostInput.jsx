import React, {useState, useEffect} from 'react';
import "./post.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { storage } from "../../../firebase";
import { ref, listAll, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function PostInput({user, handleNewPost}) {
  const [itemTitle, setItemTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [images, setImages] = useState(null);
  const [categoryName, setCategoryName] = useState(""); 
  const [chosenCategory, setChosenCategory] = useState("");
  const [favorite, setFavorite] = useState(false)

  useEffect(()=>{
    fetch('/categories')
    .then((r)=>r.json())
    .then((data)=>setCategoryName(data))
  },[])  

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
        handleNewPost(data);
    })
    setItemTitle('');
    setItemPrice('');
    setItemDescription('');
    setImages(null);
    setCategoryName('');
    alert("Post Added")
  }
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
                          setImages(joinArray);
                        });
                      }
                      return null;
                    });
                  });
      });
    }}

  return (
    <div className="text-container">
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
             onSelect={(e)=>setChosenCategory(e)}
            >
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
              onChange={handleImgInput}
            />
          <Form.Label>
            <Form.Control 
              type="hidden" 
              value="false"
              ref={x => {setFavorite(false)}}
              />
          </Form.Label>
          </Form.Group>
          <Button type='submit' className='ms-5 mt-2'>Submit</Button>
      </Form>
    </div>
  )
}

export default PostInput;