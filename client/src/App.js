import React, { useState } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Library from "./components/Library.js"
import Contact from "./components/Contact"



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

// import './App.css';

// function App() {
//   return (
//     <div className="App">Neale 
//     </div>
//   );
// }

// export default App;
