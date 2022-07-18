import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from "uuid";

const initialState = {
  forSaleItems: [],
};


// my slice (feature)
const forSaleItemsSlice = createSlice({
  name: 'items',
  initialState: initialState,
  reducers: {
    addPost: {
      reducer(state, action){
       const newItem = {...action.payload, id: uuid()} 
      state.forSaleItems.push(newItem)
    },
  }
  }
});
export const {addPost} = forSaleItemsSlice.actions;
export default forSaleItemsSlice.reducer;