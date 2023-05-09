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
            <li onClick={() => handlePageChange("Library")}> Portfolio </li>
            <li onClick={() => handlePageChange("Contact")} > Contact Me </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;