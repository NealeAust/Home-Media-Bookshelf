import React from 'react';
import { useState } from 'react';
import '../App.css'
import { useMutation } from '@apollo/client';
import { DELETE_MEDIA } from '../utils/mutations';

function DeleteMedia() {
    const [deleteMedia, { error }] = useMutation(DELETE_MEDIA);
    const [inputs, setsInputs] = useState({
        mediaId: "",

    });
    const handleChange = (event) => {
        setsInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs)
        try {

            const { data } = await deleteMedia({
                variables: { media: { ...inputs } },
            });
            console.log(data)
            window.location.assign("/");

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container-deleteMedia">
            <h1 id="heading" >Delete Media</h1>
            <div>
                <h2>Media ID</h2>
                <input name="mediaId" type="text" onChange={handleChange} />
                <button id="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default DeleteMedia;
