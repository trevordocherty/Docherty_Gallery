import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import Home_Page from "./components/Home_Page";
import Nasa_Photo_of_the_Day from "./components/Nasa_Photos";
import Mars_Rover_Photos from "./components/Mars_Photos";
import './App.css';
function App() {
  return (
  <BrowserRouter>
  <div>
<Route component = {Home_Page} path = "/" exact />
<Route component = {Nasa_Photo_of_the_Day} path = "/nasaphototoday" />
<Route compenent = {Mars_Rover_Photos} path = "marsroverphoto" />
  
  </div>
  </BrowserRouter>
  );
}

export default App;
