import React, { useState,useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { logIn,reset_redirectContact } from "../../Redux/Slice/AuthSlice";
import './LoginStyle.css';


export default function LogIn() {
  const dispatch = useDispatch();
  const {redirectContact,redirectTo} = useSelector((state)=>state.item);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const validation = () => {
    let error = {};

    if (!user.email) {
      error.email = "email is required";
    }
    if (!user.password) {
      error.password = "password is required";
    }

    return error;
  };
  console.log(error);
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email"){
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "enter your email address" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.length === 0) {  
        setUser({ ...user, password: "" });
        setError({ ...error, password: "password is Required" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };
  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    if (
      (error.email==='' || !error.email) &&
      (error.password==='' || !error.password)
    ){
      let data = {
        email: user.email,
        password: user.password,
      };
      dispatch(logIn(data));
    
    }
  };

  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
    console.log(isInLoginPage);
    if (token !== null && token !== undefined && token !== "") {
      console.log("Check");
      isInLoginPage && navigate("/");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [redirectTo]);

  useEffect(() => {
    dispatch(reset_redirectContact(null));
  }, [redirectContact])

  return (
    <>
      <div className="container fromsubmit">
        <h2>LogIn Form</h2>
        <form action="">
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", textAlign:"center" }}>
              {error?.email}
            </span>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", textAlign:"center" }}>
              {error?.password}
            </span>
          </div>
          <div>
            <Link to='/rejistration'>
              <h3 className="regi">Go to Registration</h3>
            </Link>
          </div>
          <button type="submit" className="submittwo" onClick={Submit}>
            Submit
          </button>
          <br />
        </form>
      </div>
    </>
  );
}
