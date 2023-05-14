import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Header({ handlePageChange }) {

  return (
    <header>
      <h1>Home Media Bookshelf</h1>
      <div className = "Link">
        {/*User clicks on title to navigate to selected page (open page window)*/}
        <nav>
          <ul>
            <Link id="link" to="/">Home</Link>
            <Link id="link" to="/Library">Library</Link>
            <Link id="link" to="/AddMedia">Add</Link>
            <Link id="link" to= "/UpdateMedia">Update</Link>
            <Link id="link" to="/DeleteMedia">Delete</Link>
            <Link id="link" to="/Contact">Contact</Link>
            <Link id="logsign" to="/LoginForm">Login</Link>
            <Link id="logsign" to="/SignupForm">Signup</Link>                       
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;