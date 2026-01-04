import React, { useState } from "react";
import BookTable from "./BookTable";
import { CONSTANTS } from "../url";
import axios from "axios";
function Book() {
  const [data, setData] = useState({
    title:'',
    release_year:''
  });
  const constants = CONSTANTS[0];

  const handleChange=(event)=>{
    const {name,value}=event.target;
    console.log(name,value)
    setData(data=>({
        ...data, [name]: name === "release_year" ? Number(value) : value  
    }))
  }
  const handleAddBook = () => {
    console.log("ddd",data)
    const url = constants.HTTP + constants.API_BOOKS + constants.CREATE_APPS;
    // const data={
    //     "title": count,
    //     "release_year": 1998
    // }
     axios.post(url,data)
     .then(data=>{
        console.log(data)
     })
  };
  return (
    <>
      Book Website
      <div>
        <input type="text" name="title" id="title" placeholder="Book name" value={data.title} onChange={handleChange}/>
        <input
          type="number"
          name="release_year"
          id="release_year"
          placeholder="Release date"
          value={data.release_year}
          onChange={handleChange}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <BookTable />
    </>
  );
}

export default Book;
