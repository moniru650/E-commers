import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";
import axios from "axios";



export const  crudName = createAsyncThunk(
    "/product/create",


async (FormData) => {
  let res = await axiosInstance.post("/product/create", FormData);

  let resData = res?.data;
  return resData;
}

);

export const accessName = createAsyncThunk(
  "/product/list",

  async () => {
    let res = await axiosInstance.post("/product/list");
    
    let resData = res?.data;
    return resData;
  
  }
  
);




// const CrudSlice = createSlice({
//   name: "",
//   initialState,
//   reducers: {

//   }
// });


// export default CrudSlice.reducer;


