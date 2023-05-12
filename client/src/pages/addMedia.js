import React from 'react';
import { useState } from 'react';
import '../App.css'
import { useMutation } from '@apollo/client';
import { ADD_MEDIA } from '../utils/mutations';


function AddMedia() {
  const [addMedia, { error }] = useMutation(ADD_MEDIA);
  const [inputs, setsInputs] = useState({
    mediaId: "",
    mediaType: "",
    title: "",
    description: "",
    image: ""
  });
  const handleChange = (event) => {
    setsInputs({ ...inputs, [event.target.name]: event.target.value })
  }


  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs)
    try{

    const { data } = await addMedia({
      variables:{media:{...inputs}},
    });
    console.log(data)
    window.location.assign("/");

   } catch (err){
    console.log(err)
   }
  }
  return (
    <div className="container-addMed">
      <h1 id="heading" >Add Media</h1>
      <div>
        <h2>Media ID</h2>
        <input name="mediaId" type="text" onChange={handleChange} />
        <h2>Media Type</h2>
        <input name="mediaType" type="text" onChange={handleChange} />
        <h2> Title</h2>
        <input name="title" type="text" onChange={handleChange} />
        <h2>Description</h2>
        <input name="description" type="text" onChange={handleChange} />
        <h2>Image</h2>
        <input name="image" type="text" onChange={handleChange} />
        <button id ="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default AddMedia;
