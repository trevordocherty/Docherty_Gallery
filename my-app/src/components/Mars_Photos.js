
import React, { useState } from 'react';
import {useEffect } from 'react';
import NavigationBar from "./Nav_Bar";
const apikey = process.env.REACT;

export default function Mars_Photos() {
    const [data,setData] = useState(null);
useEffect(() => {
fetchmars();
    async function fetchmars(){
    const rest = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apikey}`);
    const data_photos = await rest.json();
    setData(data_photos);
    }
},[]);
    if (!data) return <div />
    return (
    <>
  <NavigationBar/>
<div>
<div>
</div>
<h2> {data.img_src}</h2>
</div>
</>

)
}
