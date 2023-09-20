import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const App = () => {

  const [data,setData] = useState([]);
  const PullData = () => {
    axios
    .get(`${process.env.REACT_APP_API}/read`)
    .then((response)=>{
      setData(response.data)
    })
    .catch((error)=>{
      console.log(error);
    });
  };
  useEffect(()=>{
    PullData();
  },[]);
  return (
    <div>
    <a href="/">Home</a>
    <h1>mern stack</h1>
    <button className="btn btn-primary"><Link to="/create">Write</Link></button>
    {data.map(item => 
      <div className="row" key={item.id}>
        <div className="col pt-3 pb-2 detail">
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <button>Update Blog</button>
        </div>
      </div>
    )}
    </div>
  );
}

export default App;
