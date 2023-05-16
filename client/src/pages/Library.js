import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_MEDIA, } from '../utils/queries';
import '../App.css'

const Library = () => {

const { data } = useQuery(GET_MEDIA)

const userData = data?.media || [];

userData.media.map((media) => {

        return (

            <div key={userData.media._Id} >
                <ul>
                    <h2>{userData.media._id}</h2>
                    <h2>{userData.media.mediaType}</h2>
                    <h2>{userData.mediaTitle}</h2>
                    <h2>{userData.media.description}</h2>
                    <h2>{userData.image}</h2>
                </ul>
            </div>
               )
         }
    )
}

export default Library;


