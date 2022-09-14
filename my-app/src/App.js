import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {DataProvider} from './DataContext';
import LoginForm from "./components/static/LoginForm"
import Home from "./components/pages/Home";
import MenuNav from "./components/Navigation/MenuNav";
import SignupForm from './components/static/SignupForm';
import PostInput from './components/pages/Posts/PostInput';
import ErrorPage from "./components/static/ErrorPage";
import Favorites from "./components/pages/Favorites";
import PostDetails from './components/pages/Posts/PostDetails';
import EditPost from './components/pages/Posts/EditPost';
import Contact from './components/static/Contact';
import About from './components/static/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(()=>{
    fetch('/favorites')
    .then((r)=>r.json())
    .then(setFavorites)
  },[])

  function handleFavorite(forSaleItemId, userId){
    const formData = {
      buyer_id: userId, 
      for_sale_item_id: forSaleItemId
    };
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].for_sale_item_id === formData.for_sale_item_id && favorites[i].buyer_id === formData.buyer_id){
        fetch(`/favorites/${favorites[i].id}`,{
          method: "DELETE"
        }).then((r)=>{
          if(r.ok){
            const newFavArray = favorites.filter((i)=>i.for_sale_item_id !== formData.for_sale_item_id && i.buyer_id === formData.buyer_id)
            setFavorites(newFavArray)
          }
        }) 
        return "delete"
      }
    }
    fetch(`/favorites`,{
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(r=> r.json())
    .then(data=>{
      favorites.push(data);
      setFavorites(favorites);
    })
  }

  return (
    <DataProvider>
      <Router>
        <MenuNav />
        <main>
          <Routes>
            <Route
              path="/" element={<Home handleFavorite={handleFavorite}/>}
            />
            <Route
              path="/login"
              element={<LoginForm />}
            />
            <Route
              path="/signup"
              element={<SignupForm />}
            />
            <Route
              path="/posts"
              element={<PostInput />}
            />
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites}/>}
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
    </DataProvider>
  );
}

export default App;
