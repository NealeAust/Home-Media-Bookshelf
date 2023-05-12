import React from 'react';
import { useState } from 'react';
import '../App.css'
import { UPDATE_MEDIA} from '../utils/mutations';

function UpdateMedia() {
  const [inputs, setsInputs] = useState({
    mediaId: "",
    mediaType:"",
    title: "",
    description: "",
    image: ""
  });
  const handleChange = (event) => {
    //console.log(event.target.value)
    //console.log(event.target.name)
    setsInputs({...inputs,[event.target.name]:event.target.value})
  }
    
   
  //  mediaId, mediaType, title, description, image
   
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)

  }

  // const Home = () => {
  //   const { loading, data } = addMutation(ADD_MEDIA);
  //   const addMed = data?.addMed || [];


   
    return (
      <div className= "container-addMed">
        <h1 id="heading" >Update Media</h1>
        <div>
          <h2>Media ID</h2>
          <input  name="mediaId" type="text" onChange={handleChange}/>
          <h2>Media Type</h2>
          <input name="meadiaType"  type="text" onChange={handleChange}/>
          <h2> Title</h2>
          <input name="title"  type="text" onChange={handleChange}/>
          <h2>Description</h2>
          <input name="description"  type="text" onChange={handleChange}/>
          <h2>Image</h2>
          <input name="image"  type="text" onChange={handleChange} />
          <button id = "submit" onClick={handleSubmit}>Submit</button>
          </div>                
       </div>
    )
  
}

export default UpdateMedia;



