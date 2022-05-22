import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import WebFont from "webfontloader";
import React, {Component} from 'react';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails';

function App() {
    React.useEffect(()=>{
      
      WebFont.load({
    
        google: {
          families: ["Roboto", "Droid Sans", "Chilanka"],
        },
      })
    })
  return (
    <Router>
      
      <Header/>
      {/* <Home/> */}
      <Routes>

      <Route exact path="/" component={Home}/> 
      <Route exact path="/product/:id" component={ProductDetails}/> 
      <Route exact path="/Footer" component={Footer}/> 
      </Routes>
    {/* <ProductDetails/> */}
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
