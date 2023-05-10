import React, { useState } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Library from "./pages/Library"
import addMedia from "./pages/addMedia"
import updateMedia from "./pages/updateMedia"
import deleteMedia from "./pages/deleteMedia"
import Contact from "./pages/Contact"

// Within header window at onClick of a title. 
// Code below checks each page until it finds the title clicked.
// The application navigates to and opens the selected component (page) window.
function App() {

  const [currentPage, handlePageChange] = useState("Home")

  const renderPage = (page) => {
    if (page === 'Home') {
      return <Home />;
    }
    if (page === 'Library') {
    return <Library />;
    }
    if (page === 'Add') {
      return <addMedia />;
    }
   
    if (page === 'Update') {
      return <updateMedia />;
      }
      if (page === 'Delete') {
        return <deleteMedia />;
      }
      if (page === 'Contact') {
        return <Contact />;
      };

    }

  // The header and footer remain constant, only the page(body) selected onClick changes.
  return (
    <div>
      <Header handlePageChange={handlePageChange} />
      {renderPage(currentPage)}
      <Footer />
    </div>
  );
}


export default App;