import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Services from './Pages/Services';
import SignUp from './Pages/SignUp';

 const App = () => {
  return <>
  <Router>
     <Navbar />
        <Routes>
           <Route path="/" exact  element={<Home />}/>
           <Route path="/Services" exact  element={<Services />}/>
           <Route path="/Products" exact  element={<Products />}/>
           <Route path="/SignUp" exact  element={<SignUp />}/>
        </Routes>
     </Router>
  </>;
};

export default App;
