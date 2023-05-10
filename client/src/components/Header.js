import React from 'react';
import '../App.css'
function Header({ handlePageChange }) {

  return (
    <header>
      <h1>Neales Bookshelf</h1>
      <div>
        {/*User clicks on title to navigate to selected page (open page window)*/}
        <nav>
          <ul>
            <li onClick={() => handlePageChange("Home")} > Home </li>
            <li onClick={() => handlePageChange("Library")}> Library </li>
            <li onClick={() => handlePageChange("Add")}> Add </li>
            <li onClick={() => handlePageChange("Update")}> Update </li>
            <li onClick={() => handlePageChange("Delete")}> Delete </li>
            <li onClick={() => handlePageChange("Contact")}> Contact </li>
            <li onClick={() => handlePageChange("Login")}> Login </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;