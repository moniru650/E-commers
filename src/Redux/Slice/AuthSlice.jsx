import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

// import { toast } from "react-toastify";


const initialState = {
  upload_status: "idle",
  upload_message: "idle",

  redirectContact: null,
  des: [], //for data to get displayed after get request
  //   upload_message1: "",
  redirectTo: null,
  isloggedIn: false,
  isinRegistration: false,
};


export const register = createAsyncThunk(
  "/signup",

  async (formData) => {
    let res = await axiosInstance.post("/user/signup", formData);

    let resData = res?.data;

    return resData;
  }
);



export const logIn = createAsyncThunk(
  "/signin",

  async (formData) => {
    let res = await axiosInstance.post("/user/signin", formData);

    let resData = res?.data;

    return resData;
  }
);

export const loginSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {

    reset_redirectTo: (state, { payload }) => {
      state.redirectTo = payload;
    },
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined){
        state.isloggedIn = true;
      }
    },
    handleLoggedout: (state, { payload }) => {
      localStorage.removeItem("token");
      state.isloggedIn = false;
    },
    reset_redirectContact: (state, { payload }) => {
      state.redirectContact = payload;
    },
    check_myname: (state, { payload }) => {
      let name = localStorage.getItem("name");
      if (name !== null && name !== undefined) {
        state.isinRegistration = true;
      }
    },
    handleredirectContact: (state, { payload }) => {
      localStorage.removeItem("name");
      state.isinRegistration = false;
    }
  },

  extraReducers: (builder) => {
    builder.

      addCase(logIn.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.status = "idle";
        localStorage?.setItem("token", payload?.token)
        localStorage?.setItem("Name", payload?.data.first_name)
        localStorage?.setItem("Email", payload?.data.email)
        state.redirectTo = "/"
        state.isloggedIn = true;
      })
      .addCase(logIn.rejected, (state, payload) => {
        state.status = "idle";
      })

      .addCase(register.pending, (state, payload) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "idle";
        localStorage?.setItem("name", payload?.data.first_name);
        state.isinRegistration = true;
        state.redirectContact = "/login";
      })
      .addCase(register.rejected, (state, payload) => {
        state.status = "idle";
      });
  },
});


export const {
  reset_redirectTo,
  reset_redirectContact,
  check_token,
  check_myname,
  handleLoggedout,
  handleredirectContact,
  clearUserDetails,
} = loginSlice.actions;