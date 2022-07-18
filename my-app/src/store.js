import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import forSaleItemsReducer from "./components/pages/Posts/forSaleItemsSlice";

const customizedMiddleware = getDefaultMiddleware({serializableCheck: false});

export const store = configureStore({
  reducer: {
    items: forSaleItemsReducer,
    middleware: customizedMiddleware,
  }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
