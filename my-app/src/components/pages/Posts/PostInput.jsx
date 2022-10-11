import React, {useState, useEffect, useContext} from 'react';
import Errors from '../../static/Errors';
import {headers} from "../../../Global";
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
  const {handleNewPost, addErrors, clearErrors, errors } = useContext(DataContext);

  useEffect(()=>{
    fetch('/categories')
    .then((r)=>r.json())
    .then((data)=>setCategoryName(data))
  },[])  

  useEffect(()=>{
    return()=>clearErrors();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function handleSubmitPost(e){
    e.preventDefault();
    const formData = ({ 
      category_id: chosenCategory,
      title: title,
      price: price,
      description: description,
      images: images,
    });
    if (title && images) {
        fetch("/items",{
        method: "POST",
        headers: headers,
        body: JSON.stringify(formData)
      })
      .then((r)=>r.json())
      .then(data=>{
        if(data.id){
          handleNewPost(data);
          
        }else{
          addErrors([data.errors])
        }
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
        <Form.Group className="ms-5" controlId="formGroupPostTitle">
          <Form.Label>Post Title: </Form.Label>
          <Form.Control 
            type='text'
            name='title'
            value={title}
            required={true}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupprice">
          <Form.Label>Asking Price: </Form.Label>
          <Form.Control
            type='number'
            name='price'
            value={price}
            required={true}
            onChange={(e)=>setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupdescription">
          <Form.Label>Item Description: </Form.Label>
          <Form.Control
            type='textarea'
            name='description'
            value={description}
            required={true}
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
                categoryName && categoryName.map((cat,index)=>{
                    return(
                      <option value={cat.id} key={index}>{cat.category_name}</option>
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
              required={true}
              onChange={handleImgInput}
            />
          </Form.Group>
          <Button type='submit' className='ms-5 mt-2'>Submit</Button>
      </Form>
      <Errors errors={errors} />
    </div>
  )
}

export default PostInput;