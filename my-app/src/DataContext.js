import { createContext, useState, useEffect } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) =>{
  const [currentUser, setCurrentUser] = useState({});
  const [loggedin, setLoggedin] = useState(false);
  const [errors, setErrors] = useState([]);
  const [saleItems, setSaleItems] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

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
    fetch("/me")
    .then(res=>{
      if(res.ok){
        res.json().then(user => {
          if(user){
          loginUser(user);
        setFavorites(user.favorites)
      }})
    }
  })
},[loggedin, setFavorites])

useEffect(()=>{
  fetch('/items')
  .then(r=> r.json())
  .then((data)=> {
    if(data){
        setSaleItems(data)
      }
    })
  },[loggedin, setSaleItems])

  function handleSearch(newSearch){
    setSearch(newSearch)
  }

  function handleNewPost(newPost){
    setSaleItems([...saleItems, newPost])
  }

  function handleFavorite(itemId, userId){
    const formData = {
      buyer_id: userId, 
      item_id: itemId
    };
    const array = [...favorites]
    for (let i = 0; i < array.length; i++) {
      if (array[i].item_id === formData.item_id && array[i].buyer_id === formData.buyer_id){
        fetch(`/favorites/${array[i].id}`,{
          method: "DELETE"
        }).then((r)=>{
          if(r.ok){
            const newFavArray = array.filter((i)=>{
              
              return i.item_id !== formData.item_id && i.buyer_id !== formData.buyer_id})
              console.log(newFavArray)
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
      array.push(data);
      setFavorites(array);
    })
  }

  return (
    <DataContext.Provider value = {{
      loggedin, logoutUser, currentUser, saleItems, setSaleItems, handleSearch, search, loginUser, addErrors, clearErrors, errors, handleNewPost, favorites, handleFavorite
    }}>
      {children}
      </DataContext.Provider>
  )
}

export default DataContext