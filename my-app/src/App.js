import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from "./components/static/LoginForm"
import Home from "./components/pages/Home";
import MenuNav from "./components/Navigation/MenuNav";
import SignupForm from './components/static/SignupForm';
import PostInput from './components/pages/Posts/PostInput';
import ErrorPage from "./components/static/ErrorPage";
import Favorites from "./components/pages/Favorites";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostDetails from './components/pages/Posts/PostDetails';
import EditPost from './components/pages/Posts/EditPost';
import Contact from './components/static/Contact';
import About from './components/static/About';

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [loggedin, setLoggedin] = useState(false);
  const [errors, setErrors] = useState([]);
  const [saleItems, setSaleItems] = useState([]);
  const [search, setSearch] = useState("");


  function loginUser(user){
    setCurrentUser(user);
    setLoggedin(true)
  }

  function logoutUser(){
    setCurrentUser({});
    setLoggedin(false);
  }

  function addErrors(errors){
    setErrors(errors)
  }
  function clearErrors() {
    setErrors([]);
  }

  useEffect(()=>{
    fetch('/me')
    .then(res=>{
      if(res.ok){
        res.json().then(user => {
        loginUser(user);})
      }
    })
  },[])


  useEffect(()=>{
    fetch('/for_sale_items')
    .then(r=> r.json())
    .then((data)=> setSaleItems(data))
   },[])

  function handleUpdate(forSaleItem_id, category_id,itemDescription, itemPrice, itemTitle, images){
    const copy = [...saleItems];
    for (const saleItems of copy){
      if(saleItems.id === forSaleItem_id){
        saleItems.itemTitle = itemTitle;
        saleItems.itemPrice = itemPrice;
        saleItems.itemDescription = itemDescription;
        saleItems.category_id = category_id;
        saleItems.images = images;
      }
    } 
    setSaleItems(copy)
  }

  function handleSearch(newSearch){
    setSearch(newSearch)
  }

  function handleNewPost(newPost){
    setSaleItems([...saleItems, newPost])
  }

  return (
    <Router>
      <MenuNav loggedin={loggedin} logoutUser={logoutUser}/>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home saleItems={saleItems} setSaleItems={setSaleItems} handleSearch={handleSearch} search={search}/>}
          />
          <Route
            path="/login"
            element={<LoginForm 
            errors={errors}
            addErrors={addErrors}
            clearErrors={clearErrors}
            loginUser={loginUser} 
            />}
          />
          <Route
            path="/signup"
            element={<SignupForm 
            errors={errors}
            addErrors={addErrors}
            clearErrors={clearErrors}
            loginUser={loginUser} 
            />}
          />
          <Route
            path="/posts"
            element={<PostInput user={currentUser} handleNewPost={handleNewPost} />}
          />
          <Route
            path="/favorites"
            element={<Favorites user={currentUser} />}
          />
          <Route
            exact path="/for_sale_items/:forSaleItemId"
            element={<PostDetails user={currentUser} />}
          />
          <Route
            exact path="/for_sale_items/:forSaleItemId/edit"
            element={<EditPost handleUpdate={handleUpdate}/>} 
          />
           <Route
            exact path="/contact"
            element={<Contact />} 
          />
           <Route
            exact path="/about"
            element={<About />} 
          />
          <Route 
            path="*"
            element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
