// import {createSlice} from '@reduxjs/toolkit';
// import {v4 as uuid} from "uuid";

export function fetchForSaleItems(){
  return function(dispatch){
    dispatch({ type: "posts/postsLoading" })
    fetch("/for_sale_items", {
      method: "GET"
    })
    .then(resp=> resp.json())
    .then(data =>{
      dispatch({type: "posts/postsLoaded", payload: data
      })
    })
  }
}

export function fetchNewPost(){
  return function(dispatch){
    dispatch({ type: "posts/addNewPost" })
    fetch("/for_sale_items", {
      method: "POST"
    })
    .then(resp=> resp.json())
    .then((data => {
      dispatch({ type: "posts/addedNewPost", payload: data })
    }))
  }
}
// export function addPost(){
//   return { type: postAdded }
// }

// const forSaleItemsSlice = createSlice({
//   name: "forSaleItems",
//   initialState: {
//     entities: [],
//   },
//   reducers: {
//     postAdded(state, action){
//       state.entities.push({ id: uuid(), name: action.payload });
//     },
//     postRemoved(state, action){
//       const index = state.entities.findIndex((forSaleItem)=> forSaleItem.id ===action.payload);
//       state.entities.splice(index, 1);
//     }
//   }
// })

// export const { postAdded, postRemoved } = forSaleItemsSlice.actions;

// export default forSaleItemsSlice.reducer;
const initialState = {
  entities: [],
  status: "idle",
  error: null
};

export default function forSaleItemsReducer(state = initialState, action){
  switch(action.type){
    case "posts/postsLoading":
      return {
        ...state,
        status: "loading",
      };
      case "posts/postsLoaded":
        return {
          ...state,
          entities: action.payload,
          status: "idle",
        }
      case "posts/addNewPost":
        return {
          ...state,
          status: "loading",
        };
        case "posts/addedNewPost":
          return {
            ...state,
            entities: action.payload,
            status: "idle"
          }
      default:
        return state;
  }
}