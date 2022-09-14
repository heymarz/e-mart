import { createContext, useState, useEffect } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) =>{
  const [currentUser, setCurrentUser] = useState({});
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
    fetch("/me")
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
  return (
    <DataContext.Provider value = {{
      loggedin, logoutUser, currentUser, saleItems, setSaleItems, handleSearch, search, loginUser, addErrors, clearErrors, errors, handleNewPost
    }}>
      {children}
      </DataContext.Provider>
  )
}

export default DataContext