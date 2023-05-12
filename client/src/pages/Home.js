import React from 'react';
import Mypic from "../images/Neale.jpg"

function Home() {
    console.log("home!!!!!!!!")
    return (
        <div>
            <h2>Introduction</h2>


            <div>
                <img className="my-pic" src={Mypic} alt="Neale Chapman" />
            </div>
            <p className="AboutMe" >
                I live in Craigieburn Melbourne. I am married to Jackie, we do not have children.
                During my working life I have changed careers a number of times, capability performing a
                range of roles that have enhanced my skillsets.
                I have had some IT experience and even though it has been challenging the coding bootcamp has
                increased my technical knowledge immensely, which I am looking forward to applying.
                My leisure activities include walking my two dogs, going to the gymnasium, playing lawn bowls and I am a keen
                (and frustrated) St Kilda supporter.
            </p>
        </div>

);
}

export default Home