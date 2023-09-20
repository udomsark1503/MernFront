import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormCreate = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
    
    const submitForm = (e) => {
      e.preventDefault();      
      //console.table({title, content});
      //console.log("API URL = ",process.env.REACT_APP_API);
      axios.post(`${process.env.REACT_APP_API}/create` ,{title,content})
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      });
    };
    const handleClick = () => {
      Swal.fire(
        'Send it!',
        'success'
      )
      setTitle(title)
      setContent(content)
    }
    return (
      <div>
          <h1>เขียนบทความ</h1>
          <form onSubmit={submitForm}>
          <input 
            type="text" 
            name="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title name..."/>
          <br/>
          <input 
            name="content" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="content name..."/>
          <button type="submit" onClick={handleClick} className="btn btn-primary">SEND</button>
          </form>  
      </div>
    );
  };

  export default FormCreate;