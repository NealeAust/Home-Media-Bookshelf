import React from 'react';
import { useState } from 'react';
import '../App.css'
import { DELETE_MEDIA } from '../utils/mutations';

function DeleteMedia() {
    const [inputs, setsInputs] = useState({
        mediaId: "",

    });
    const handleChange = (event) => {
        setsInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
    }

    return (
        <div className="container-addMed">
            <h1 id="heading" >Delete Media</h1>
            <div>
                <h2>Media ID</h2>
                <input name="mediaId" type="text" onChange={handleChange} />
                <button id = "submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default DeleteMedia;
