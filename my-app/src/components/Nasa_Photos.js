
import React, { useState } from 'react';
import {useEffect } from 'react';
import NavigationBar from "./Nav_Bar";
import {Carousel} from "react-react-Carousel"
const api = process.env.NASA;
export default function Nasa_Photos() {
    const [ photoData, setPhotoData ] = useState(null);
    const [data,setData] = useState(null);
useEffect(() => {
fetchmars();
    async function fetchmars(){
    const rest = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api}`);
    const data_photos = await rest.json();
    setData(data_photos);
    }
},[]);
useEffect(() => {
    fetchphoto();
 async function fetchphoto() {
     const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api}'
            `);
    const data_photo = await res.json();
            setPhotoData(data_photo);
            console.log(data_photo)
        }
    }, []);
    if (!data) return <div />
    if (!photoData) return <div  />
    return (
    <>
  <NavigationBar/>
<div>
{photoData.media_type === "image" ? (
<img src = {photoData.url} alt = {photoData.title} />): (
    <iframe
     src = {photoData.url} 
    width = "960"  height = "569" frameBorder = "0"
     gesture = "media" allow = "autoplay" allowFullScreen />
)}
<div>
<h1> {photoData.title} </h1>
<p>{photoData.data}</p>
<p>{photoData.explanation}</p>
</div>
<h2> {data.img_src}</h2>
<h2> {data.img_media} </h2>
<h2> {data.medium}</h2>
<h3> {data.description}</h3>
</div>
<Carousel>
    {data.img_src}
</Carousel>
</>

)
}


