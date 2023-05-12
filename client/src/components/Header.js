import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Header({ handlePageChange }) {

  return (
    <header>
      <h1>Neales Bookshelf</h1>
      <div>
        {/*User clicks on title to navigate to selected page (open page window)*/}
        <nav>
          <ul>
            {/* <li onClick={() => handlePageChange("Home")} > Home </li>
            <li onClick={() => handlePageChange("Library")}> Library </li>
            <li onClick={() => handlePageChange("Add")}> Add </li>
            <li onClick={() => handlePageChange("Update")}> Update </li>
            <li onClick={() => handlePageChange("Delete")}> Delete </li>
            <li onClick={() => handlePageChange("Contact")}> Contact </li>
            <li onClick={() => handlePageChange("Login")}> Login </li> */}
            <Link to="/">Home</Link>
            <Link to="/Library">Library</Link>
            <Link to="/AddMedia">Add</Link>
            <Link to= "/UpdateMedia">Update</Link>
            <Link to="/DeleteMedia">Delete</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/LoginForm">LoginForm</Link>
            <Link to="/SignupForm">SignupForm</Link>
            
            
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;