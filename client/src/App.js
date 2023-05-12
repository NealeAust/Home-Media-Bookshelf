import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from "./components/Header"
import Footer from "./components/Footer"
// import LoginForm from "./components/LoginForm"
import Home from "./pages/Home"
import Library from "./pages/Library"
import AddMedia from "./pages/addMedia"
import UpdateMedia from "./pages/updateMedia"
import DeleteMedia from "./pages/deleteMedia"
import Contact from "./pages/Contact"
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Library' element={<Library/>} />
               <Route exact path='/AddMedia' element={<AddMedia/>} />
                <Route exact path='/UpdateMedia' element={<UpdateMedia/>} />
                <Route exact path='/DeleteMedia' element={<DeleteMedia/>} />
                <Route exact path='/Contact' element={<Contact/>} />
                <Route exact path='/LoginForm' element={<LoginForm/>} />
                <Route exact path='/SignupForm' element={<SignupForm/>} />
            
            
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />

       <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
           </Routes>
         </>
       </Router>
     </ApolloProvider>
   );
 }
 export default App;













// Within header window at onClick of a title. 
// Code below checks each page until it finds the title clicked.
// The application navigates to and opens the selected component (page) window.
// function App() {

//   const [currentPage, handlePageChange] = useState("Home")

//   const renderPage = (page) => {
//     if (page === 'Home') {
//       return <Home />;
//     }
//     if (page === 'Library') {
//       return <Library />;
//     }
//     if (page === 'Add') {
//       return <AddMedia />;
//     }

//     if (page === 'Update') {
//       return <UpdateMedia />;
//     }
//     if (page === 'Delete') {
//       return <DeleteMedia />;
//     }
//     if (page === 'Contact') {
//       return <Contact />;    
//     };
    
    
//   }

//   // The header and footer remain constant, only the page(body) selected onClick changes.
//   return (
//     <div>
//       <Header handlePageChange={handlePageChange} />
//       {renderPage(currentPage)}
//       <Footer />
//     </div>
//   );
//   }


// export default (App)