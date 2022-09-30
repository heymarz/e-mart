import React, {useState, useEffect, useContext} from 'react';
import DataContext from '../../../DataContext';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { storage } from "../../../firebase";
import { ref, listAll, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./post.css";

function PostInput() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState(null);
  const [categoryName, setCategoryName] = useState(""); 
  const [chosenCategory, setChosenCategory] = useState("");
  const { currentUser, handleNewPost } = useContext(DataContext);

  useEffect(()=>{
    fetch('/categories')
    .then((r)=>r.json())
    .then((data)=>setCategoryName(data))
  },[])  

  function handleSubmitPost(e){
    e.preventDefault();
    const formData = ({ 
      seller_id: currentUser.id,
      category_id: chosenCategory,
      title: title,
      price: price,
      description: description,
      images: images,
    });
    if (title && images) {
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
      setTitle('');
      setPrice('');
      setDescription('');
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
            value="currentUser.id"
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupPostTitle">
          <Form.Label>Post Title: </Form.Label>
          <Form.Control 
            type='text'
            name='title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupprice">
          <Form.Label>Asking Price: </Form.Label>
          <Form.Control
            type='number'
            name='price'
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupdescription">
          <Form.Label>Item Description: </Form.Label>
          <Form.Control
            type='textarea'
            name='description'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </Form.Group>
        <label className = "ms-5 mt-3">Please Choose a category</label>
            <select 
              className = "ms-5 mt-3"
              id = "dropdown-category-btn" 
              onChange={(e)=>setChosenCategory(e.target.value)}
             >
        
              { 
                categoryName && categoryName.map((cat)=>{
                    return(
                      <option value={cat.id} key={cat.categoryName}>{cat.categoryName}</option>
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
          </Form.Group>
          <Button type='submit' className='ms-5 mt-2'>Submit</Button>
      </Form>
    </div>
  )
}

export default PostInput;