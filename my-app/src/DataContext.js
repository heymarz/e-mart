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
        loginUser(user);
        setFavorites(user.favorites)})
      }
    })
    fetch('/for_sale_items')
    .then(r=> r.json())
    .then((data)=> {
      if(data){
        setSaleItems(data)
      }
    })
  },[])


  function handleSearch(newSearch){
    setSearch(newSearch)
  }

  function handleNewPost(newPost){
    setSaleItems([...saleItems, newPost])
  }

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
      const array = [...favorites]
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