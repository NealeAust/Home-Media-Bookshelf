import React from 'react';
import Mypic from "../images/02BookShelf.jpg"

function Home() {
    return (
        <div>
            <div>
                <img className="my-pic" src={Mypic} alt="Neale Chapman" />
            </div>
            <div id= "home"> <h2>About Home Media Bookshelf</h2></div>
            <p className="Bookshelf" >
                Home Media Bookshelf is an application designed to allow the user to join a media library containing movies, TV shows and music in multiple 
                hardcopy formats that managed across the service.  Ultimately the purpose is for users to be able to borrow items without cost.
            </p>
        </div>

);
}

export default Home