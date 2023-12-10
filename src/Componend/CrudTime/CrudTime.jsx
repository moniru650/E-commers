import React, { useState } from 'react'
import { crudName } from '../../Redux/Slice/ProductSlice';
import { useDispatch } from 'react-redux';



export default function CrudTime(){

const [curd, setCrud] = useState({
    title: "",
    description: ""
});
const [img,setImg ] = useState();

let name, value;
const postCrudData = (e) =>{
      name = e.target.name;
      value = e.target.value;
      if(name === "title"){
        setCrud({...curd, title:value});
      }
      if(name === "description"){
        setCrud({...curd,description:value})
      };
};
const dispatch = useDispatch();
const submit = (e) =>{
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", curd.title);
    formData.append("description", curd.description);
    formData.append("imeage",img);
    dispatch(crudName(formData));
}




  return (
    <>
    <br />
    <br />
     <input
      type="text" 
      className='from-control'
      placeholder='enter title'
      name='title'
      value={curd.title}
      onChange={(e)=>postCrudData(e)}
      />
      <br />
      <br />
      <input 
      type="text" 
      className='from-control'
      placeholder='description'
      name='description'
      value={curd.description}
      onChange={(e)=> postCrudData(e)}
      />
      <br />
    <input
    type="file"
    onChange={(e) => setImg(e.target.files[0])}
    name="img"
    accept="image/*"
    />
    <button onClick={submit}>submit</button>
    </>
  )
}
