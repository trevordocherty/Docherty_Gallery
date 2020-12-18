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
<Route compenent = {Mars_Rover_Photos} path = "/marsroverphoto" />
<Route component = {Earth_Images_Space_Station} path = "./earthimages" />
<Route component = {Image_Gallery} path = "./image_gallery" />
<Route>
<body> Hello Lets Explore Space</body>
</Route>
  </div>
  </BrowserRouter>
  );
}

export default App;
