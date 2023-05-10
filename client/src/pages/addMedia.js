import React from 'react';
import { useState } from 'react';
import '../App.css'
import { ADD_MEDIA} from '../utils/mutations';

function AddMedia() {
  const [inputs, setsInputs] = useState({});
  const handleChange = (event) => {

  }
   
   
   
  //  mediaId, mediaType, title, description, image
   
  const handleSubmit = (event) => {
    event.preventDefault();


  }




   
    return (
      <div className= "container-addMed">
        <h1 id="heading" >Add Media</h1>
                     
    
        <form>
          
          <label> media ID
          <input 
          type="text" 
          name="mediaId" ></input>
          </label>
          <input type="text" name="start_datetime" placeholder="Date" />
          <input type="text" name="location" placeholder="Location" />
          <button type="submit">Create Event</button>
        </form>
      </div>
    )
  
}


