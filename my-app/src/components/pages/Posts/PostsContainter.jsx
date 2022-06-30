import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchForSaleItems} from "./forSaleItemsSlice";

function PostsContainter(){
  const itemsArray = useSelector((state)=>state.forSaleItems)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchForSaleItems())
  },[])
  
  console.log(itemsArray)
  
  return (
    <div>
      <h1>For Sale Items</h1>
      <ul>
     
        {/* {forSaleItems.map((post)=>(
          <li key={post}>{post}</li>
        ))}  */}
        
      </ul>
    </div>
  )
}

export default PostsContainter