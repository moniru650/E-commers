import React, {useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { handleLoggedout,handleredirectContact,reset_redirectTo } from '../../Redux/Slice/AuthSlice';
import './HeaderStyle.css';



export default function Header() {

  const {isloggedIn} = useSelector((state)=>state.item)
  const [is_loggedIn, setis_loggedIn] = useState("");

  const [have_email, sethave_email] = useState("");
  const navigate = useNavigate();
  //const token = localStorage.getItem("token");
  const Name = localStorage.getItem("Name");

  const Email = localStorage.getItem("Email");

  


  const dispatch = useDispatch();
  useEffect(() => {
    setis_loggedIn(Name);
  }, [Name]);
  useEffect(() => {
    sethave_email(Email);
  }, [Email]);

  const logout = () => {
    dispatch(handleLoggedout());
    dispatch(reset_redirectTo());
    dispatch(handleredirectContact());
    navigate("/login");
  };





  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <a className="navbar-brand" href="#">Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/Blog">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/contact'>
        <a className="nav-link" href="#">About</a>
        </Link>
      </li>
      <li className="nav-item">
      <Link to='/Service'>
      <a className="nav-link" href="#">Blog</a>
        </Link>
      </li>
      <li className="nav-item">
      <Link to='/SomeAbout'>
      <a className="nav-link" href="#">Contact</a>
        </Link>
      </li >
      {
        isloggedIn ? <li className="nav-item" onClick={logout}>
       
        <a className="nav-link"  href="#">Logout</a>
         
        </li> : <li className="nav-item">
      <Link to='/login'>
      <a className="nav-link" href="#">Login</a>
        </Link>
      </li>
      }
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    </>
  )
}

